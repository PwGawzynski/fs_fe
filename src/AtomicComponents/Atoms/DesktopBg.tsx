import styled from 'styled-components';
import React from 'react';
import { Img } from './Imge';
import Resource from '../../assets/images/DesktopBG.webp';

const BgContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  top: -2vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    height: 30vh;
    position: absolute;
    top: 7vh;
  } ;
`;

const ImgBg = styled(Img)`
  filter: blur(8px);
  width: 500px;
`;

const TextContainer = styled.div`
  width: 100%;
  height: calc(100% - 2vh);
  display: grid;
  position: absolute;
  margin-top: 2vh;
  grid-template-columns: repeat(10, 10vw);
  grid-template-rows: repeat(6, 1fr);
`;

const HelloText = styled.p`
  padding: 0;
  margin: 0;
  font-weight: bold;
  color: #53ec8e;
  font-family: Roboto;
  font-size: 6vw;

  @media (max-width: 500px) {
    align-self: center;
    grid-column-start: 2;
    grid-column-end: 11;
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;

const MottoText = styled(HelloText)`
  @media (max-width: 500px) {
    justify-self: center;
    align-self: self-start;
    grid-column-start: 2;
    grid-column-end: 10;
    grid-row-start: 5;
    grid-row-end: 6;
    color: white;
  }
`;

export const DesktopBg = () => {
  return (
    <BgContainer>
      <ImgBg width="120vw" src={Resource} margin="0" />
      <TextContainer>
        <HelloText>WELCOME JOHN :)</HelloText>
        <MottoText>LET’S START OUR WORK</MottoText>
      </TextContainer>
    </BgContainer>
  );
};
