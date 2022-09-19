import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass, faClock } from '@fortawesome/free-regular-svg-icons';
import { faTractor } from '@fortawesome/free-solid-svg-icons';
import { StatisticTextContainer } from '../Atoms/StyledContainers';

const P = styled.p`
  font-family: Roboto;
  color: #05396e;
  margin: 0;
  padding: 0;
  display: block;
  text-align: end;
  width: 90%;
`;

const OneLineContainer = styled.div`
  font-size: 4vw;
  display: flex;
  align-items: center;
  grid-column: 2 / span 8;
  grid-row: span 2;
  justify-content: flex-start;
  :nth-child(1) {
    grid-row-start: 2;
    grid-row-end: 4;
  }
`;
const IconContainer = styled(OneLineContainer)`
  width: 10%;
  justify-content: flex-start;
`;

export const UserWorkInfo = () => {
  return (
    <StatisticTextContainer>
      <OneLineContainer>
        <IconContainer>
          <FontAwesomeIcon icon={faHourglass} color="#05396e" />
        </IconContainer>
        <P>00:00:12 s</P>
      </OneLineContainer>
      <OneLineContainer>
        <IconContainer>
          <FontAwesomeIcon icon={faTractor} color="#05396e" />
        </IconContainer>
        <P>12 ha</P>
      </OneLineContainer>
      <OneLineContainer>
        <IconContainer>
          <FontAwesomeIcon icon={faClock} color="#05396e" />
        </IconContainer>
        <P>12:32:14 s</P>
      </OneLineContainer>
      <OneLineContainer>
        <IconContainer>
          <FontAwesomeIcon icon={faTractor} color="#05396e" />
        </IconContainer>
        <P>243 ha</P>
      </OneLineContainer>
    </StatisticTextContainer>
  );
};
