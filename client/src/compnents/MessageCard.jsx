import React from "react";

export default function MessageCard({messages}){
    console.log(messages.text)
    return(
        <>
            <div className='messageBox'>
                <h2>{messages.text}</h2>
                <h3>{messages.user}</h3>
                <h5>{messages.added}</h5>
            </div>
        </>
    )
}