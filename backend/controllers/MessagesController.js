import * as MessageModel from "../models/MessageModel.js";

export const getMessage = (req, res) => {
    try{
        const messages = MessageModel.getMessage()
        if(messages){
            return res.render('message',{messages})
        }else{
            return res.send("No messages Yet")
        }
    }
    catch (err){
        res.status(500).send('Error fetching messages');
    }
};

export const addMessage = (req,res) => {
    try{
        const user = req.body.user;
        const message = req.body.text;
        MessageModel.addMessage(user,message)
        res.redirect('/messages')
    }catch (err){
        res.status(500).send('Error adding data')
    }
}

