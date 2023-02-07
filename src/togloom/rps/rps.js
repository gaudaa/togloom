import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";


const RockPaperScissors = () => {
    
    const choices = ["rock", "paper", "scissors"];
    const [myChoice, setMyChoice] = useState('');
    const [comChoice, setComChoice] = useState('');
    const [result, setResult] = useState('');

const selectChoice = (i) =>{

    setMyChoice(i);
    console.log(myChoice);
    setComChoice(Math.floor(Math.random()*choices.length));
    console.log(comChoice);


}

  return(
<>
    <h1> Rock, Paper, scissors</h1>
    {choices.map((el, i)=>{
        return <button key={i} onClick={()=>selectChoice(i)}>{el}</button>
    })

    }
    <h1>My choice:{myChoice}</h1>
    <h1>Com choice:{comChoice}</h1>
    <h1>Who win:{result}</h1>

</>

  )
};

export default RockPaperScissors;
