import React, {useState} from "react";

export default function Counter() {
    const [counter, setCounter]= useState(0)

    function increaseCounter() {
        setCounter(counter+1)
    }

    return(
        <div style={style.counter}>
            {counter}
        </div>
    )
} 

const style= {
    counter:{
        border:"1px solid rgb(123, 93, 63)",
        backgroundColor: "rgb(226, 143, 70)",
        borderRadius: "1px"
    }
}