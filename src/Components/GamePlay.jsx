import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";


const GamePlay = () => {
const[error, setError] =useState("")
const[score, setScore] = useState(0);
const[selectedNumber,setSelectedNumber] = useState();
const [currentDice, setCurrentDice] = useState(1);
const [showRules, setShowRules] =useState(false);

const generateRandomNumber= (min,max) => {
    return Math.floor(Math.random() * (max - min) + min)

};

const resetScore = () => {
    setScore(0);
};


const handleRollDice = () => {
    if(!selectedNumber)
    {
        setError("You have not selected any number");
        return;
    }
    setError("");
    const randomNumber= generateRandomNumber(1,7);
    setCurrentDice(randomNumber);
   
    if(selectedNumber==randomNumber){
        setScore((prev) => prev+randomNumber);
    }else{
        setScore((prev)=> prev-2);
    }

    setSelectedNumber(undefined);
 
    


}

  return (
    <MainContainer>
        <div className="topContainer">
      <TotalScore score={score}/>
      <NumberSelector setError={setError} error ={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RollDice currentDice={currentDice} rollDice={handleRollDice} />
      <div className="btn">
    <button className="butt" onClick={resetScore}>Reset Score</button>
    <button className="butto"  onClick={()=> setShowRules((prev)=>!prev)}>
     {showRules ? "Hide" : "Show"} Rules</button>
      </div>
      { showRules && <Rules />}
      </MainContainer>
  )
}

export default GamePlay;

const MainContainer=styled.div`

.topContainer{
    display:flex;
    justify-content:space-between;
    align-items:end;
}

.butt{
    display: flex;
background-color:black;
color:white;
font-size: 16px;
flex-direction:column;
justify-content:center;
align-items:center;
width: 220px;
height: 44px;
top: 20px;
left: 20px;
padding: 10px, 18px, 10px, 18px;
border-radius: 5px;
border: 1px solid black;
transition:0.3s background ease-in;
&:hover{
background-color: white;
color:black;
font-weight:600;
border: 1px solid black;
transition:0.3s background ease-in;
cursor:pointer;
}
}
.butto{
    display: flex;
background-color:white;
color:black;
border:1px solid black;
font-size: 16px;
flex-direction:column;
justify-content:center;
align-items:center;
width: 220px;
height: 44px;
top: 20px;
left: 20px;
padding: 10px, 18px, 10px, 18px;
border-radius: 5px;
border: 1px solid black;
transition:0.3s background ease-in;
&:hover{
background-color: black;
color:white;
font-weight:600;
border: 1px solid black;
transition:0.3s background ease-in;
cursor:pointer;
}
}


.btn{
    margin-top:40px;
    display:flex;
    flex-direction:column;
    gap:24px;
}
`;
