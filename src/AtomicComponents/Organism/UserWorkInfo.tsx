import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass, faClock } from '@fortawesome/free-regular-svg-icons';
import { faTractor } from '@fortawesome/free-solid-svg-icons';
import { StatisticTextContainer } from '../Atoms/StyledContainers';
import { StyledDivContainer } from '../Atoms/StyledDivContainer';

interface Props {
  color: string;
}

const P = styled.p`
  font-family: Roboto;
  color: ${(props: Props) => props.color || 'black'};
  margin: 0;
`;

const OneLineContainer = styled.div`
  font-size: 4vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  margin-top: 5%;
  :nth-child(1) {
    margin-top: 0;
  }
`;

const TimeContainer = styled(StyledDivContainer)`
  gap: 5%;
`;
const Icon2Container = styled(TimeContainer)`
  width: auto;
  svg:nth-child(2) {
    font-size: 3vw;
  }
  p:nth-child(1) {
    font-size: 4.5vw;
  }
`;
export const UserWorkInfo = () => {
  return (
    <StatisticTextContainer>
      <OneLineContainer>
        <FontAwesomeIcon icon={faHourglass} color="#05396e" />
        <TimeContainer width="auto">
          <P color="#e75252">01</P>
          <P color="#05396e">:</P>
          <P color="#52e770">33</P>
          <P color="#05396e">:</P>
          <P color="#05396e">12</P>
          <P color="#05396e">s</P>
        </TimeContainer>
      </OneLineContainer>
      <OneLineContainer>
        <FontAwesomeIcon icon={faTractor} color="#05396e" />
        <P color="#52e770">11 ha</P>
      </OneLineContainer>
      <OneLineContainer>
        <Icon2Container>
          <P color="#05396e">Σ</P>
          <FontAwesomeIcon icon={faClock} color="#05396e" />
        </Icon2Container>
        <TimeContainer width="auto">
          <P color="#e75252">254</P>
          <P color="#05396e">:</P>
          <P color="#52e770">45</P>
          <P color="#05396e">:</P>
          <P color="#05396e">21</P>
          <P color="#05396e">s</P>
        </TimeContainer>
      </OneLineContainer>
      <OneLineContainer>
        <Icon2Container>
          <P color="#05396e">Σ</P>
          <FontAwesomeIcon icon={faTractor} color="#05396e" />
        </Icon2Container>
        <P color="#52e770">1972 ha</P>
      </OneLineContainer>
    </StatisticTextContainer>
  );
};
