import Joi from 'joi'
import Answer from '../models/answer';
import Question from '../models/question';


const queController={
  
    async postque(req,res,next){
            
        const queSchema = Joi.object({
            title: Joi.string().required(),
            detail: Joi.string().required(),
            tags: Joi.array().items(Joi.string()).required(),
            upvote: Joi.number(),
            downvote: Joi.number(),
            userid: Joi.string(),
        });
        const { error } = queSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { title,detail,tags,upvote,downvote,userid} = req.body;
    
        // prepare the model
    
        const user = new Question({
            title,
            detail,
            tags,
            upvote,
            downvote,
            userid: req.params.id
         
        });
  
        try {
            const result = await user.save();
            console.log(result);
    
        } 
        
        catch(err) {
            return next(err);
        }
    
    
            res.status(200).json({user})
        
    },

   
   

}

export default queController;