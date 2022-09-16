import styled from 'styled-components';
import React from 'react';
import { Img } from './Imge';
import Resource from '../../assets/images/DesktopBG.webp';

interface Props {
  children: React.ReactNode;
  takenColumnCount: number;
  oneColumnSizeInVw: number;
}

const BgContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  top: -2vh;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

const ImgBg = styled(Img)`
  filter: blur(4px);
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
  font-size: ${(props: Props) => {
    const textLength = props?.children?.toString().trim().length;
    if (textLength && textLength > 0) {
      return `${
        (props.takenColumnCount * props.oneColumnSizeInVw) / textLength + 2
      }vw`;
    }
    return '1vw';
  }};
  @media (max-width: 500px) {
    align-self: center;
    grid-column-start: 2;
    grid-column-end: 9;
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;

const MottoText = styled(HelloText)`
  @media (max-width: 500px) {
    justify-self: center;
    align-self: center;
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
      <ImgBg width="110%" src={Resource} margin="0" />
      <TextContainer>
        <HelloText takenColumnCount={6} oneColumnSizeInVw={10}>
          WELCOME John al ali :)
        </HelloText>
        <MottoText takenColumnCount={8} oneColumnSizeInVw={10}>
          LET’S START OUR WORK
        </MottoText>
      </TextContainer>
    </BgContainer>
  );
};
