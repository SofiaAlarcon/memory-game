import React from "react";
import "./Game.css";
import GameBoard from "../../components/GameBoard";
import TopBar from "../../components/TopBar";


export default function Game() {
    return(
        <div className="container">
            <TopBar></TopBar>
            <GameBoard></GameBoard>
        </div>
    )
}


