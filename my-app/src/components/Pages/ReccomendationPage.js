import React, {Component} from "react";
import {useNavigate} from 'react-router-dom';
import search from "./searchWord";

class Reccomendation  extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    routeChange=()=> {
        let navigate = useNavigate();
        navigate("/signup-page");
    }
    
   render(){
        
    return (
        <div>
            <div className="searcwrds" >{search.words.map(word => <h2>{word}<br/></h2>)}</div>
            
            <button class="button-64" role="button" onClick={this.routeChange}><span class="text">All Done!</span></button>
            </div>
        
    )
}
}

export default Reccomendation
