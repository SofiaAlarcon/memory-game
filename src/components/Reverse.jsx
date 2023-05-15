import React from "react";
import logo from "../assets/logo.jpg"


export default function Reverse(props) {
    return (
        <div style={style.reverse} onClick={props.handleClick}>
            <img style={style.logo} src={logo}/>
        </div>
    )
}

const style={
    reverse: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },

    logo: {
        width: "130px",
        height: "130px",
        border: "2px double rgb(123, 93, 63)",
        borderRadius: "5px"
    }
}