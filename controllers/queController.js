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

    async updateque(req,res,next){
            
        const queSchema = Joi.object({
            title: Joi.string(),
            detail: Joi.string(),
            tags: Joi.array().items(Joi.string()),
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
            let document;
            try {
                document = await Question.findOneAndUpdate(
                    { _id: req.params.id },
                    {
                        title,
                        detail,
                        tags,
                        upvote,
                        downvote,
                        userid
                    },
                    { new: true }
                );
            } catch (err) {
                return next(err);
            }
            res.json(document);
    
        
        
    },

   
    async getque(req,res,next){
        let que;
        
        try{
           que = await Question.findOne({_id: req.params.id});
        }
        catch(err)
        {
            return next(err);
        }
        res.json(que);
    },

    async getall(req,res,next){
        let queall;
        const tag = req.params.tag;
        try{
           queall = await Question.find({tags: tag});
        }
        catch(err)
        {
            return next(err);
        }
        res.json(queall);
    },

    async getallquebyuser(req,res,next){
        let quebyallusers;
        try{
           quebyallusers = await Question.find({userid: req.params.id});
        }
        catch(err)
        {
            return next(err);
        }
        res.json(quebyallusers);
    },



}

export default queController;