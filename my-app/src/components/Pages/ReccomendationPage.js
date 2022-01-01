import React from "react";
import {useNavigate} from 'react-router-dom';

function Reccomendation() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/reminder-page")

    }
    return (
        <div>This page is to recommend vids and other stuff
            <button class="button-64" role="button" onClick={handleClick}><span class="text">All Done!</span></button>
            </div>
        
    )
}

export default Reccomendation

