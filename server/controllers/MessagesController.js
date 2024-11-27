import * as MessageModel from "../models/MessageModel.js";
import asyncHandler from 'express-async-handler'
import {validationResult} from "express-validator";

export const getMessage = (req, res) => {
    try{
        const messages = MessageModel.getMessage()
        console.log(Boolean(messages))
        if(messages){
            return res.render('message',{messages})
        }else{
            return res.send("No messages Yet")
        }
    }
    catch (err){
        res.status(500).send("Server Error")
    }
};

export const addMessage = (req, res) => {
    console.log(req.protocol + '://' + req.get('host') + req.url)
    try{
        const errors = validationResult(req);

        if(!errors){
            return res.render('form' ,{errors})
        }
        const user = req.body.user;
        const message = req.body.text;
        MessageModel.addMessage(user,message)
        res.redirect('http://localhost:5173/messages/')
    }catch (err){
        res.status(500).send('Error adding data')
    }
}

