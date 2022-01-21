import Joi from 'joi'
import User from '../models/user';
import JwtService from '../services/jwtService';
import bcrypt from 'bcrypt';


const registerController={

    async register(req,res,next)
    {

        const registermodel = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp(`^[a-zA-Z0-9]{3,30}$`)).required(),
        });

        const {error} = registermodel.validate(req.body)
        if(error)
        {
            throw next(error);
        }

        try{
           const exist = await User.exists({email: req.body.email});
           if(exist)
           {
               return next(error+" user already exists!")
           }
        }
        catch(err){
         return next(err)
        }

        const { name, email, password } = req.body;

    // Hash password
    const hashedPass = await bcrypt.hash(password, 10);

    // prepare the model

    const user = new User({
        name,
        email,
        password: hashedPass
    });
    let token;
    try {
        const res = await user.save();
        //token = JwtService.sign({ _id: res._id });
    } 
    
    catch(err) {
        return next(new Error("user cant be registered!"));
    }


        res.json({token})
    }

}

export default registerController