import React, {useState} from "react";
import "./Modal.css";

export default function() {
    const [modal, setModal] = useState(false)

    function toggleModal() {
        setModal(!modal)
    }

    return(
        <>
            <button onClick={toggleModal}>
                sobre el juego
            </button>

            {modal && (
                <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <h3>nombre del juego</h3>
                    <p>
                        texto 
                        texto 
                        texto
                    </p>
                    <button className="close-modal" onClick={toggleModal}>x</button>
                </div>
            </div>
            )}

            
        </>
    )
    

}