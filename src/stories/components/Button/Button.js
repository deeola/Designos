import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
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


const Buttons = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
background-color: ${props => props.primary ? '#FFFFFF' : "E7816B"};; 
width: 152px;
height: 56px;
border-radius: 10px;
color: black;
outline:none;
border: none;
font-size: 15px;
text-transform: uppercase;
font-weight: 400;
color: white;
font-family: 'Jost', sans-serif;
${({ color }) => handleColorType(color)};
cursor:Pointer;
`

export const Button = ({  color, backgroundColor, label, ...props }) => {
 
  return (
    <Buttons color={color} onClick={() => alert('ButtonClicked')} >
      {label}
    </Buttons>
  );
};

Button.propTypes = {
 
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
