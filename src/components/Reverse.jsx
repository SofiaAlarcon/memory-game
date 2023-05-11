import React from "react";
import logo from "../assets/logo.jpg"
import "./Reverse.css"

export default function Reverse(props) {
    return (
        <div className="reverse" onClick={props.handleClick}>
            <img className="logo" src={logo}/>
        </div>
    )
}