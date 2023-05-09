import React from "react";
import "./Home.css"
import {useLocation} from "wouter";
import logo from "../../assets/logo.jpg"
import Modal from "../../components/Modal";

export default function Home (){
    const [path, setLocation] = useLocation()

    return(
        <div className="container-home">
            <h1>juego juego juego juego</h1>
            <img className="logo-home" src={logo}/>
            <button onClick={() => setLocation("/Game")}>jugar</button>
            <Modal/>
            <button>links</button>
        </div>
    )
}