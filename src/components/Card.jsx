import React, {useState} from "react";
import Reverse from "./Reverse.jsx";
import "./Card.css"

export default function Card(props) {
    const [isUpward, setIsUpward]= useState(props.isUpward)
    
    function handleClick(){
        setIsUpward(true)
        const card = {
            pair: props.pair,
            setIsUpward: setIsUpward
        }
        props.saveId(card)
    }
    
    return(
        <div className="card">
            { isUpward
                ? <img className="image" src={props.image}/>
                : <Reverse handleClick={handleClick}></Reverse>
            }
        </div>

    )
}