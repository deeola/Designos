import React,{useState} from "react";
import styled from "styled-components";
import logo from "../assets/shared/desktop/logo-dark.png";
import iconClose from '../assets/shared/mobile/icon-close.svg';
import ham from '../assets/shared/mobile/icon-hamburger.svg'

//my Funbctions
const handleColorType = (color) => {
  switch (color) {
    case "Active":
      return "color:  #E7816B; ";
    default:
      return "color: #333136; ";
  }
};

const NavSytle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  margin: 40px auto;
`;

const UnorderedList = styled.ul`
  
  
  display: none ;

  @media screen and (min-width: 414px) {
    display: flex;
  justify-content: space-between;
  width: 80%;
  background: red;
 

   li {
    list-style: none;
    width: 30%;
    text-align: end;
    background: blue;
 
  }


	}

  @media screen and (min-width: 843px ) {
		width: 70%;

	} 


  
`;

const LinkTag = styled.a`
  text-decoration: none;
  ${({ color }) => handleColorType(color)};
  font-weight: 700;
  
`;



const LogoContainer = styled.img`
  width: 10rem;

`;


const MobileLogoContainer = styled.img`
  display: none;
  @media screen and (max-width: 375px) {
		display: block;
    width: 202px;
   

	}
`;

const MobileNavIcon=  styled.div`
width: : 24px;


  @media screen and (min-width: 414px) {
    display: none;


  

	}
`

const NavOpen = styled.img`

`

const NavClose=styled.img`
display: none;
`

//styled component

export const Navbar = ({ color, ...props }) => {
  // const [nav, useNav] = useState(false)
  // const handleClick = () =>{
  //   useNav(!nav)
  // }
  return (
    
    <NavSytle>
      <LogoContainer alt="logo" src={logo}>
      </LogoContainer>
      
      <UnorderedList>
        <li>
          <LinkTag color={color} href="www.facebook.com">
            OUR COMPANY
          </LinkTag>
        </li>
        <li>
          <LinkTag href="222.facebook.com">LOCATIONS</LinkTag>
        </li>
        <li>
          <LinkTag href="www.facebook.com">CONTACT</LinkTag>
        </li>
      </UnorderedList>
      <MobileNavIcon >
        <NavOpen src={ham} alt='open menu'>

        </NavOpen>
        <NavClose src={iconClose} alt='icon close'>

        </NavClose>
      </MobileNavIcon>
    </NavSytle>
  );
};

export default Navbar;


