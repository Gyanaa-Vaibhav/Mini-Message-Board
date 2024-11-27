import React from "react";
import MessageCard from "../compnents/MessageCard.jsx";

export default function Messages(){
    const [messages,setMessages] = React.useState([])

    const fetchMessages = async () => {
        try {
            const res = await fetch('http://localhost:6969/messages/api');
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const data = await res.json();
            setMessages(data.messages)
        } catch (error) {
            console.error("Failed to fetch messages:", error);
        }
    };

    React.useEffect(() => {
        fetchMessages();
    }, []);

    const messageList = messages.map(message =>{
        return <MessageCard messages={message}/>
    })

    return(
        <>
            {messageList.length > 0 ? messageList : <h1>No Messages Yet</h1>}
        </>
    )

}