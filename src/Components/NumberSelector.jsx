import PropTypes from "prop-types";
import styled from "styled-components"


const arrNum= [1,2,3,4,5,6]
 

const NumberSelector = ({setError, error,selectedNumber,setSelectedNumber}) => {

const NumberSelectorHandler= (value) => {
setSelectedNumber(value)
setError("");
};
 
  return (
    <NumberSelectorContainer>
   <p className="error"> {error}</p>
    <div className='flex'>
        {arrNum.map((value, i) =>(
            <Box key={i} 
            isSelected={value===selectedNumber}
            onClick ={() => NumberSelectorHandler(value)}
            >
              {value}</Box>
        ))}
      
       
    </div>
    <p className="align-end">Select Number</p>
    </NumberSelectorContainer>
  )
}


NumberSelector.propTypes = {
  selectedNumber: PropTypes.number.isRequired,
  setSelectedNumber: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  setError:PropTypes.string,
};

export default NumberSelector

 const NumberSelectorContainer=styled.div`
 
 display:flex;
 flex-direction:column;

 
 

 .flex{
    display:flex;
    gap:24px;
 }
 
 p{
    font-size:24px;
    font-weight:700;
     
 }

 .align-end {
    align-items: end; /* Align the p tag to the end of the cross-axis */
  }

  .error{
    color:red;
    font-size:24px;
  }
 
 `;

const Box=styled.div`

height:72px;
width:72px;
border:1px solid black;
font-size:24px;
font-weight:700;
display:grid;
place-items:center;
background-color: ${(props)=>props.isSelected ? "black" : "white"};
color: ${(props)=>props.isSelected ? "white": "black"};
cursor:pointer;


`;