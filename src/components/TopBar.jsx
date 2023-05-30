import React from "react";
import Counter from "./Counter";

export default function TopBar() {
    
    return(
        <div style={style.container}>
            <div style={style.content}>
                <Counter/>
            </div>
        </div>
    )
}


const style = {
    container: {
        height:"30px", 
        width:"100%",  
        display:"flex",
        justifyContent:"center",
        /*border:"1px solid rgb(123, 93, 63)",*/
        backgroundColor: "rgb(226, 143, 70)"
    },
    content: {
        height:"100%",
        width:"90%",
        display:"flex",
        justifyContent:"center",
        flexDirection: "row",
        alignItems: "center",
    },
        
}