import React from "react";
import "./Home.css"
import {useLocation} from "wouter";
import logo from "../../assets/logo.jpg"


export default function Home (){
    const [path, setLocation] = useLocation()

    return(
        <>
            <div className="container-home">
                <h1>Juego Juego</h1>
                <img className="logo-home" src={logo}/>
                <button onClick={() => setLocation("/Game")}>jugar</button>
                <button>links</button>
            </div>
        </>
    )
}