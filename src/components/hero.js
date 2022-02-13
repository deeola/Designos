import React from "react";
import Container from "./Container";
import styled from "styled-components";
import Button from "../stories/components/Button";
import BgImage from "../assets/home/desktop/bg-pattern-hero-home.svg";
import phoneImage from "../assets/home/desktop/image-hero-phone.png";
import HeaderOne from './headerOne';
import Para from './paragraph'

export const HeroContainer = styled.div`
  background-color: ${({ backgoundColor = "#E7816B" }) => backgoundColor};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-position: 65rem -10px;
  background-repeat: no-repeat;
  background-size: 40rem;
  background-image: url(${phoneImage});
  position: relative;
  padding: 100px 70px;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    z-index: 2;
    left: 0;
    background-image: url(${BgImage});
    background-repeat: no-repeat;
    background-position: right;
  }
`;

export const LeftDiv = styled.div``;

export const RightDiv = styled.div`
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 20rem;
  width: 70rem;
  height: 20rem;
  &:after {
    content: "";
  }

  position: relative;
  left: 100px;
  top: 200px;
  z-index: 2;
  /* background: orange; */
`;

export const ImageTag = styled.img`
  width: 50%;
  position: relative;
  z-index: -1;
  left: 400px;
  top: 300px;
`;

export const Header = styled.div`
margin: 30px 0px;

`

function Hero({ width, ...props }) {
  return (
    <Container>
      <HeroContainer>
        <LeftDiv>
          <Header>
            <HeaderOne>Award-Winning custom</HeaderOne>
            <HeaderOne>designs and digital</HeaderOne>
            <HeaderOne>branding solutions</HeaderOne>
          </Header>
          <Header>
            <Para color={'#FFFFFF'}>With over 10 years in the industry, we are experienced in</Para>
            <Para color={'#FFFFFF'}>creating fully responsive websites, app design, and engaging</Para>
            <Para color={'#FFFFFF'}>brand experiences. Find out more about our services.</Para>
          </Header>
          <Button color={"darkWhite"} label="LEARN MORE" />
        </LeftDiv>
      </HeroContainer>
    </Container>
  );
}

export default Hero;
