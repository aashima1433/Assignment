import Joi from 'joi';
import User from '../models/user';
import bcrypt from 'bcrypt';
import JwtService from '../services/JwtService';



const loginController = {
    async login(req, res, next) {
        // Validation
        const loginmodel = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        });
        const { error } = loginmodel.validate(req.body);

        if (error) {
            return next(error);
        }
    
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return next(error+"wrong credentials");
            }
            const matchpass = await bcrypt.compare(req.body.password, user.password);
            if (!matchpass) {
                return next(error+"wrong credentials");
            }
            // Token
            const token = JwtService.sign({ _id: user._id });
   
            res.json(token);

        } catch(err) {
            return next(err);
        }

    },

   
}

export default loginController;