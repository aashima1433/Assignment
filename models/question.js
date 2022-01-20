import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const queSchema = new Schema({
    title: { type: String, required: true },
    detail: { type: String, required: true },
    tags: { type: [String], required: true },
    userid: {type: String,required: true },
    upvote: {type: Number, default:0},
    downvote: {type: Number, default:0},
    
});

export default mongoose.model('Question', queSchema);  