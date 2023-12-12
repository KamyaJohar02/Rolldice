import styled from "styled-components"
import PropTypes from "prop-types"



const RollDice = ({currentDice, rollDice}) => {
  return (
    <DiceContainer>
    <div className="dice" onClick={rollDice}>
   <img src={`/Images/DiceImages/dice_${currentDice}.jpg`} alt="dice_1" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}


RollDice.propTypes = {
    currentDice: PropTypes.number.isRequired,
    rollDice: PropTypes.func.isRequired,
  };

export default RollDice

const DiceContainer=styled.div`

display:flex;
flex-direction:column;
align-items:center;
margin-top:48px;

.dice{
    cursor:pointer;
}

p{
   
font-size: 24px;
font-weight: 500;
line-height: 36px;



}
`;