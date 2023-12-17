import express from 'express'
import { GetuserByUsername } from '../Control/ConnectToDb.js'
export  const LoginRouter = express.Router()


LoginRouter.post('/Login', async (req, res, next) => {
    console.log("Herre!!!");
    const user = await GetuserByUsername(req.body.username)
    if (!user) {
        res.status(401).send("Account doesn't exit")
        return
    }
    else {
        console.log("Account !!");
    }
})



