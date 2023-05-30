import React, {useContext, useState} from "react";
import { GameStateContext } from "../context/GameStateProvider";

export default function Counter() {
    const [counter, setCounter] = useContext(GameStateContext);

    return(
        <div style={style.counter}>
            Pares: {counter}/12
        </div>
    )
} 


const style= {
    counter:{
        /*border:"1px solid rgb(123, 93, 63)",*/
        backgroundColor: "rgb(226, 143, 70)",
        borderRadius: "1px",
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        color: "rgb(25, 5, 71)",
        fontWeight: "bolder"
      
    }
}