import React, {useState} from "react";

export default function TopBar() {
    /*const [isUpward, setIsUpward]= useState(props.isUpward)*/
    
    return(
        <div style={style.container}>
            top bar
        </div>

    )
}

const style = {
    container: {
        height:"30px", 
        width:"100%", 
        justifyContent:"center", 
        display:"flex",
        /*border: "1px solid rgb(222, 131, 39)",
        backgroundColor: "rgb(222, 131, 39)"*/
        border:"2px solid rgb(222, 131, 39)",
        backgroundColor: "rgb(226, 143, 70)"
    },

}