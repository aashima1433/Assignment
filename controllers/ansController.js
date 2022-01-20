import Joi from 'joi'
import Answer from '../models/answer';
import Question from '../models/question';


const ansController={
   
    async postans(req,res,next){
        const ansSchema = Joi.object({
            description: Joi.string().required(),
            upvote: Joi.number(),
            downvote: Joi.number(),
            accepted: Joi.boolean(),
            queid: Joi.string(),
            userid: Joi.string()
            
        });
        const { error } = ansSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { description,upvote,downvote,accepted,queid,userid} = req.body;
    
        // prepare the model
    
        const answer = new Answer({
            description,
            upvote,
            downvote,
            accepted,
            queid: req.params.id,
            userid: req.params.userid
        });
  
        try {
            const result = await user.save();
    
        } 
        
        catch(err) {
            return next(err);
        }
    
    
            res.status(200).json(answer)
        

    }

}

export default ansController