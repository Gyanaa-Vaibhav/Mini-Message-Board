import { body, validationResult } from 'express-validator';
import express, {Router} from "express";
import messagesData from "../data/messagesData.js";
import {getMessage,addMessage} from "../controllers/MessagesController.js";
const messageRoute = Router();

messageRoute.get('/', getMessage)

messageRoute.get('/api', (req,res)=>{
    try{
        const messages = messagesData
        console.log(Boolean(messages))
        if(messages) {
            return res.json({ messages })
        }else{
            return res.json({error : "No messages Yet"})
        }
    }
    catch(err) {
        res.status(500).send("Server Error Cannot get messages")
    }
})

messageRoute.get('/new',(req,res)=>{
    res.render('form')
})

messageRoute.post('/new',
    [
        // body('email').isEmail().withMessage('Invalid email address'),
        body('password')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long'),
        body('user').notEmpty().withMessage('Username is required'),
    ],
    addMessage)

export default messageRoute