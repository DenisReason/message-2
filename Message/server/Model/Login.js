import express from 'express'
import { GetuserByUsername } from '../Control/ConnectToDb.js'
import { gentoken } from '../Control/jwt.js';

export  const LoginRouter = express.Router()


LoginRouter.post('/Login', async (req, res, next) => {
    const user = await GetuserByUsername(req.body.username)
    console.log(user.username);
    if (!user) {
        res.status(401).send("Account doesn't exit")
        return
    }
    else {
        const token = await gentoken({username:user.user,password:user.password})
        res.status(200).send(JSON.stringify(token))
    }
})



