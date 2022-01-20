import express from 'express'
import { PORT,DB_URL } from './config'
import routes from './Routes/index'
import  mongoose  from 'mongoose'
const app = express()

//Database connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/stackoverflow',routes)

app.listen(PORT,()=>{
    console.log(`Listening on server ${PORT}`)
})