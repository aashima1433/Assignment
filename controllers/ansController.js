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
            const result = await answer.save();
    
        } 
        
        catch(err) {
            return next(err);
        }
    
    
            res.status(200).json(answer)
        

    },

    async showallans(req,res,next){
        let question,answers;
        try{
            question  = await Question.findOne({_id:req.params.id })
            answers = await Answer.find({queid: req.params.id, accepted: true})
        }
        catch(err)
        {
            return next(err);
        }
        return res.json({question,answers})
    },

    async acceptans(req,res,next){
        const ansSchema = Joi.object({
            description: Joi.string(),
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
        let document;
            try {
                document = await Answer.findOneAndUpdate(
                    { _id: req.params.ansid },
                    {
                        description,
                        upvote,
                        downvote,
                        accepted: true,
                        queid,
                        userid
                    },
                    { new: true }
                );
            } catch (err) {
                return next(err);
            }
            res.status(201).json(document);
    },

}

export default ansController