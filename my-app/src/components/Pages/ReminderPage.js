import React from "react";
import {useNavigate} from 'react-router-dom';
import Example from "../Google";


function Reminder() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/display-page")

    }

    return (
        <div>
            {/* <Example></Example> */}
            <button class="button-75" role="button" onClick={handleClick}><span class="text">All set!</span></button>
        </div>
    )
}

export default Reminder;