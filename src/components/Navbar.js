import React from "react";
import styled from "styled-components";
import logo from "../assets/shared/desktop/logo-dark.png";

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
  display: flex;
  justify-content: space-between;
  width: 40%;

  li {
    list-style: none;
    width: 30%;

    text-align: end;
  }
`;

const LinkTag = styled.a`
  text-decoration: none;
  ${({ color }) => handleColorType(color)};
  font-weight: 700;
  font-size: 14px;
`;

const LogoContainer = styled.div`
  width: 196px;

  img {
    width: 100%;
  }
`;

const TabLogoContainer = styled.div`
  display: none;
`;
const MobileLogoContainer = styled.div`
  display: none;
`;

//styled component

export const Navbar = ({ color, ...props }) => {
  return (
    
    <NavSytle>
      <LogoContainer>
        <img alt="logo" src={logo}></img>
      </LogoContainer>
      <TabLogoContainer>
        <img alt="logo" src={logo}></img>
      </TabLogoContainer>
      <MobileLogoContainer>
        <img alt="logo" src={logo}></img>
      </MobileLogoContainer>
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
    </NavSytle>
  );
};

export default Navbar;


