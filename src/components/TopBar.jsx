import React from "react";
import Counter from "./Counter";

export default function TopBar() {
    /*const [isUpward, setIsUpward]= useState(props.isUpward)*/
    
    return(
        <div style={style.container}>
            <div style={style.content}>
                <h3 style={style.title}>nombre nombre nombre</h3>
                <Counter/>
                <h3>cronómetro</h3>
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
        /*flexDirection: "row",*/
        /*alignItems: "center",*/
        /*border: "1px solid rgb(222, 131, 39)",
        backgroundColor: "rgb(222, 131, 39)"*/
        /*border:"2px solid rgb(222, 131, 39)",*/
        border:"1px solid rgb(123, 93, 63)",
        backgroundColor: "rgb(226, 143, 70)"
    },
    content: {
        height:"100%",
        width:"90%",
        display:"flex",
        justifyContent:"space-between",
        flexDirection: "row",
        alignItems: "center",
    },

    title: {
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        /*color: rgb(24, 8, 66);*/
        color: "rgb(25, 5, 71)",
    }

}