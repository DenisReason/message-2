import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { LoginRouter  } from '../Model/Login.js'


dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()
app.use(cors({
    origin:"http://localhost:19006",
    methods:["GET","POST"]
}))
app.use(express.json())
app.use(LoginRouter)
app.listen(PORT,()=>{
    console.log("Server is runing on port ",PORT);
})



