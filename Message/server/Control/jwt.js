import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()
const KEY = process.env.KEY
export const gentoken = async(data)=>{
    
    console.log(KEY);
    const token = await jwt.sign(data,KEY,{expiresIn:"30s"})
    console.log(token);
    return token
}