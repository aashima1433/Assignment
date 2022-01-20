import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ansSchema = new Schema({
    description : {type: String,required: true },
    upvote: {type: Number, default:0},
    downvote: {type: Number, default:0},
    accepted: {type: Boolean,default:false},
    queid: {type: String, required:true},
    userid: {type: String, required:true}
    
});

export default mongoose.model('Answer', ansSchema);  