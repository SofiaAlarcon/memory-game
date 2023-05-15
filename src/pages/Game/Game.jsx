import React from "react";
import GameBoard from "../../components/GameBoard";
import TopBar from "../../components/TopBar";


export default function Game() {
    return(
        <div style={style.container}>
            <TopBar></TopBar>
            <GameBoard></GameBoard>
        </div>
    )
}

const style = {
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        height: "90%",
        width: "100%",
        rowGap: "10px",
        columnGap: "7px",
        backgroundColor: "rgb(237, 230, 196)"
    }
}
