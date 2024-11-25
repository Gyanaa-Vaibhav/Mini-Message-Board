
import express, {Router} from "express";

import messagesData from "../data/messagesData.js";
import {getMessage,addMessage} from "../controllers/MessagesController.js";
const messageRoute = Router();

messageRoute.get('/',getMessage)

messageRoute.get('/new',(req,res)=>{
    res.render('form')
})

messageRoute.post('/new',addMessage)

export default messageRoute