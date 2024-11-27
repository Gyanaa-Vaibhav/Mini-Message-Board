import React, {useState} from "react";

export default function Home(){
    const [count,setCount] = useState(0);
    return(
        <>
            <button
                onClick={() => setCount(prevState => prevState + 1)}
            >
                Count {count}
            </button>
        </>
    )
}