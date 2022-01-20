import Question from "../models/question";
import Answer from "../models/answer";

const voteController={

    async vote(req,res,next){
        let type = req.body.type;
        let votetype = req.body.voteType;
        console.log(req.body);
        let document;
        if(type === "ques")
        {
            let res = await Question.findOne({_id: req.body.id});

            const {title,detail,tags,upvote,downvote,userid} = res;

            try {
                if(votetype === 'up')
                {
                document = await Question.findOneAndUpdate(
                    { _id: req.body.id },
                    {
                        title,
                        detail,
                        tags,
                        upvote: upvote+1,
                        downvote,
                        userid
                        
                    },
                    { new: true }
                );
                }
                else{
                    document = await Question.findOneAndUpdate(
                        { _id: req.body.id },
                        {
                            title,
                            detail,
                            tags,
                            upvote,
                            downvote:downvote+1,
                            userid
                            
                        },
                        { new: true }
                    );
                }
            } catch (err) {
                return next(err);
            }

            
        }

        else
        {
            let res = await Answer.findOne({_id: req.body.id});
             
            const {description,upvote,downvote,queid,userid} = res;

            try {
                if(votetype === 'up')
                {
                document = await Answer.findOneAndUpdate(
                    { _id: req.body.id },
                    {
                        description,
                        upvote: upvote+1,
                        downvote,
                        queid,
                        userid
                        
                    },
                    { new: true }
                );
                }
                else{
                    document = await Answer.findOneAndUpdate(
                        { _id: req.body.id },
                        {
                            description,
                        upvote,
                        downvote: downvote+1,
                        queid,
                        userid
                            
                        },
                        { new: true }
                    );
                }
            } catch (err) {
                return next(err);
            }
        }
        res.json(document)
    }
}


export default voteController