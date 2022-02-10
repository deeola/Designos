import React from "react";
import styled from "styled-components";
import logo from "../assets/shared/desktop/logo-dark.png";

const NavSytle = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 20px auto;
`;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 50%;

  ul {
    
  }

  li {
  }

  a {
    text-decoration: none;
  }
`;
const LogoContainer = styled.div``;
const TabLogoContainer = styled.div`
  display: none;
`;
const MobileLogoContainer = styled.div`
  display: none;
`;
export const Navbar = () => {
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
          <a href="#">OUR COMPANY</a>
        </li>
        <li>
          <a href="#">LOCATIONS</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </UnorderedList>
    </NavSytle>
  );
};

export default Navbar;
