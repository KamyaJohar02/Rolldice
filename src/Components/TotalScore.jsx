import styled from "styled-components";
import PropTypes from "prop-types";


const TotalScore = ({score}) => {
  return (
    <ScoreContainer>

  <h1>{score}</h1>
  <p>Total Score</p>

    </ScoreContainer>
      
    
  )
}

TotalScore.propTypes = {
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default TotalScore

const ScoreContainer=styled.div`
 display:flex;
 flex-direction:column;
 max-width:135px;
 height: auto;
  //background-color:red;
  text-align:center;

 h1{
    font-size:80px;
    height:auto;
    
 }

 p{
 font-size:20px;
 font-weight:500;


 }

`; 