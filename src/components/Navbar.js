import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/shared/desktop/logo-dark.png";
import iconClose from "../assets/shared/mobile/icon-close.svg";
import ham from "../assets/shared/mobile/icon-hamburger.svg";
import { Link } from "react-router-dom";
import { Container } from "../globalStyles";

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
  width: 100%;
  margin: 20px auto;
  font-family: "Jost", sans-serif;
  position: relative;
  padding: 0px 20px;

  //tablet view
  @media screen and (min-width: 415px) {
    width: 96%;
  }
`;

const LinkWrapper = styled.div`
  position: absolute;
  background-color: black;
  width: 100%;
  display: flex;
  top: 45px;
  left: 0;
  z-index: 2;
  flex-direction: column;
  padding: 40px 20px;
  height: 235px;
  justify-content: space-between;
 

  //tablet view
  @media screen and (min-width: 415px) {
    display: flex !important;
    align-items: center;
    width: 20rem;
    position: unset;
    flex-direction: row;
    top: unset;
    background-color: unset;
    z-index: unset;
    height: unset;
  }

  @media screen and (min-width: 843px) {
  }
`;

const LinkTag = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 24px;

  @media screen and (min-width: 415px) {
    ${({ color }) => handleColorType(color)};
    color: black;
    font-size: 12px;
    font-weight: 700;
  }
`;

const LogoContainer = styled.img`
  width: 180px;
  @media screen and (min-width: 415px) {
    width: 120px;
  }
`;

const MobileNavIcon = styled.div`
  width: 24px;

  @media screen and (min-width: 415px) {
    display: none;
  }
`;

const NavOpen = styled.img``;

const NavClose = styled.img`
  display: none;
`;

//styled component

export const Navbar = ({ tablet, mobile, color, ...props }) => {
  const [menuOpened, setMenuOpend] = useState(false);
  const [menuClosed, setMenuClosed] = useState(false);

  const slideMenu = () => {
    return menuOpened ? {} : { display: "none", marginLeft: -930 };
  };

  const flipIcons = () => {
    return menuOpened ? { display: "block" } : {};
  };

  const removeHam = () => {
    return menuOpened ? { display: "none" } : {};
  };

  const menuIconClicked = () => {
    setMenuOpend(!menuOpened);
    return menuClosed ? {} : { display: "block" };
  };

  const closeIconClicked = () => {
    setMenuOpend(false);
  };

  return (
    <Container>
      <NavSytle mobile={mobile} tablet={tablet}>
        <LinkTag to="/">
          <LogoContainer alt="logo" src={logo}></LogoContainer>
        </LinkTag>

        <LinkWrapper style={slideMenu()}>
          <LinkTag color={color} to="/about">
            OUR COMPANY
          </LinkTag>
          <LinkTag to="/location">LOCATIONS</LinkTag>
          <LinkTag to="/contact">CONTACT</LinkTag>
        </LinkWrapper>
        <MobileNavIcon>
          <NavOpen
            style={removeHam()}
            onClick={() => menuIconClicked()}
            src={ham}
            alt="open menu"
          ></NavOpen>
          <NavClose
            style={flipIcons()}
            onClick={() => closeIconClicked()}
            src={iconClose}
            alt="icon close"
          ></NavClose>
        </MobileNavIcon>
      </NavSytle>
    </Container>
  );
};

export default Navbar;
