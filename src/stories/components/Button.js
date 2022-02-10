import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



//styled component
 const handleColorType = color => {

  switch (color) {
    case "darkWhite":
      return "color: #333136; background: #FFFFFF;";
    case "darkOrange":
      return "color: #FFFFFF; background: #E7816B;";
    default:
      return "color: #FFFFFF; background: #FFAD9B;";
  }
};


const MyButtons = styled.button`
background-color: ${props => props.primary ? '#FFFFFF' : "E7816B"};; 
width: 152px;
height: 56px;
border-radius: 10px;
color: black;
outline:none;
border: none;
font-size: 15px;
text-transform: uppercase;
font-weight: 700;
color: white;
font-family: 'Jost', sans-serif;
${({ color }) => handleColorType(color)};
cursor:Pointer;
`

export const Button = ({  color, backgroundColor, label, ...props }) => {
 
  return (
    <MyButtons color={color} onClick={() => alert('ButtonClicked')} >
      {label}
    </MyButtons>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;