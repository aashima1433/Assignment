import express from 'express'
import { PORT,DB_URL } from './config'
import routes from './Routes/index'
import  mongoose  from 'mongoose'

const app = express()


app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`Listening on server ${PORT}`)
})