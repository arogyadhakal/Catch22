import React from "react";
import {useNavigate} from 'react-router-dom';


function Reminder() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/display-page")

    }

    return (
        <div>This page is to remind about goal
            <button class="button-75" role="button" onClick={handleClick}><span class="text">All set!</span></button>
        </div>
    )
}

export default Reminder