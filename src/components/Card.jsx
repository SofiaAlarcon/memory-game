import React, {useState} from "react";
import Reverse from "./Reverse.jsx";


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
        <div style={style.card}>
            { isUpward
                ? <img style={style.image} src={props.image}/>
                : <Reverse handleClick={handleClick}></Reverse>
            }
        </div>

    )
}

const style = {
    /* acá tengo que limitarle un tamaño así los elementos hijos (Reverse o la img) no terminan siendo más grandes que ella*/
    card: {
        width:"150px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(222, 131, 39)",
        border: "2px solid rgb(240, 141, 42)",
        borderRadius: "5px",
        boxShadow: "3px 2px rgb(76, 75, 75)"
    },

    image: {
        width: "120px",
        height:"120px",
        borderRadius: "7px",
        border: "2px double rgb(194, 105, 17)"
    }
}

