import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    return (
        <div className="home-bg">
            <div className="welcome-text">
            Want to be on top of your new year's resolution?<br/> Well you've come to the right place!
            </div>
            <button class="get-started-button" onClick ={() => {navigate("/goal-page")}}>Get Started</button>
            
        </div>
    )
}

export default Home