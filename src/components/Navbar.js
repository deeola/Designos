import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/shared/desktop/logo-dark.png";
import iconClose from "../assets/shared/mobile/icon-close.svg";
import ham from "../assets/shared/mobile/icon-hamburger.svg";
import { Link } from "react-router-dom";

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
  font-family: 'Jost', sans-serif;
`;

const LinkWrapper= styled.div`
  display: none;
  @media screen and (min-width: 414px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 16rem;

  }

  @media screen and (min-width: 843px) {
    width:370px
  }
`;

const LinkTag = styled(Link)`
  text-decoration: none;
  ${({ color }) => handleColorType(color)};
  font-weight: 700;
  font-size: 12px;
`;

const LogoContainer = styled.img`
  width: 200px;
  @media screen and (min-width: 414px) {
    width: 120px;

	}
`;


const MobileNavIcon = styled.div`
width: 24px;


  @media screen and (min-width: 414px) {
    display: none;

	}
`;

const NavOpen = styled.img``;

const NavClose = styled.img`
  display: none;
`;

//styled component

export const Navbar = ({ tablet, mobile,  color, ...props }) => {
  // const [nav, useNav] = useState(false)
  // const handleClick = () =>{
  //   useNav(!nav)
  // }
  return (
    <NavSytle mobile={mobile} tablet={tablet}>
      <LogoContainer alt="logo" src={logo}></LogoContainer>

      <LinkWrapper>
        <LinkTag color={color} to="/about">OUR COMPANY</LinkTag>
        <LinkTag to="/location">LOCATIONS</LinkTag>
        <LinkTag to="/contact">CONTACT</LinkTag>
      </LinkWrapper>
      <MobileNavIcon>
        <NavOpen src={ham} alt="open menu"></NavOpen>
        <NavClose src={iconClose} alt="icon close"></NavClose>
      </MobileNavIcon>
    </NavSytle>
  );
};

export default Navbar;
