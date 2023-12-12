
import styled from "styled-components";
import PropTypes from 'prop-types'

const StartGame = ({ toggle }) => {


  return (
    <Container>
        <div>
     <img src=".\Images\dices.png"/>
     </div>
     <div className="content">
      <h1>DICE GAME</h1>
      <div className="align">
      <Button onClick={toggle}
      >Play Now</Button>
      </div>
     </div>
    </Container>
    
  )
}

export default StartGame;

const Container=styled.div`
 max-width: 1180px;
 display:flex;
 height:100vh;
 margin: 0 auto;
 align-items:center;

 .content h1{
    font-size:96px;
    white-space:nowrap;
 }

 .align{
   margin-right:0;
 }

`; 

const Button=styled.button`
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
`;

StartGame.propTypes = {
    toggle: PropTypes.func.isRequired,
  };