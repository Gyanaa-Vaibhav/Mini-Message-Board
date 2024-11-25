// Done Pareses the Data form database
// and returns individual array of details
// and adds message
import messagesData from "../data/messagesData.js";

export const getMessage = () => {
    return messagesData
}

export function addMessage(user,text){
    const message = {
        text : `${text}`,
        user : `${user}`,
        added : new Date().toLocaleString()
    }
    messagesData.push(message);
    return message;
}