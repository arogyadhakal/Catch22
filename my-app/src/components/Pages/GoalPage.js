import React, { useState } from "react";
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import {Button} from '@material-ui/core';
import { IconButton } from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add'
import Icon from '@material-ui/core/Icon'
import { useNavigate } from "react-router-dom";
import search from "./searchWord";
import { InsertEmoticonSharp } from "@material-ui/icons";


const useStyles = makeStyles((theme) =>  ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
        button: {
            margin: theme.spacing(1),
        }
    }
    
}))

function Goal() {
    let navigate = useNavigate();

    const classes = useStyles()
    const [inputFields, setInputField] = useState([
        {goal: ''},
    ]);

    let word= '';
    let ind =0;
    let name='';
    const item =  [];
    const handleChangeInput = (index,event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
        word = event.target.value;
        search.words.push(word);
        
        console.log(search.words)
        
        
       
        
        

        

    }
    
    item.push(search.words);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields",inputFields);
        console.log(search.words.length);
        navigate("/recommendation-page")
        

    };

    const handleAddFields = () => {
        setInputField([...inputFields, { goal: ''}])
        
    }

    const handleRemoveFields = (index) => {
        const values =[...inputFields]
        values.splice(index, 1);
        setInputField(values);
    }
    return (
        <Container>
            <h1>Add a Goal</h1>
            <form className={classes.root} onSubmit={handleSubmit}>
                { inputFields.map((inputField, index) => (
                    <div key={index}>
                        <TextField
                            name="goal"
                            label="GOAL"
                            value={inputField.goal}
                            onChange={event => handleChangeInput(index,event)}
                        />

                        <IconButton
                            onClick={() => handleRemoveFields(index)}
                        >
                            <RemoveIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleAddFields()}
                        >
                            <AddIcon/>
                        </IconButton>
                    </div>

                ))}
                <Button className={classes.button} variant="contained" color ="primary" type="submit" onClick={handleSubmit}>Done!</Button>
            </form>
        </Container>
    )
}

export default Goal