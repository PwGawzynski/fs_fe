import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass, faClock } from '@fortawesome/free-regular-svg-icons';
import { faTractor } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { GetCurrentlyOpenWorkDayRes, UniversalResponseObject } from 'types';
import { StatisticTextContainer } from '../Atoms/StyledContainers';
import { Api } from '../../Utils/Api/Api';

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

function convertToTime(ms: number) {
  const hours = Math.floor(ms / 60 / 60);
  const minutes = Math.floor((ms - hours * 60 * 60) / 60);
  const seconds = Math.floor(ms - hours * 60 * 60 - minutes * 60);
  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }   s`;
}

async function handleDataAsk(
  setWorkDayData: React.Dispatch<React.SetStateAction<number>>,
) {
  const data = (await Api.getCurrentlyOpenWorkDay()) as UniversalResponseObject;
  const givenTime = new Date(
    (data.data as GetCurrentlyOpenWorkDayRes).startDate,
  ).getTime();
  const doneTime = (new Date().getTime() - givenTime) / 1000;

  setWorkDayData(doneTime);
}

export interface Props {
  msFromStart: number;
  setMsFromStart: React.Dispatch<React.SetStateAction<number>>;
  timerOn: boolean;
}

export const UserWorkInfo = (props: Props) => {
  const { msFromStart, setMsFromStart, timerOn } = props;
  useEffect(() => {
    let intervalId: any;
    if (timerOn) {
      (async () => {
        await handleDataAsk(setMsFromStart);
        intervalId = setInterval(
          () => setMsFromStart((prevState) => prevState + 1),
          1000,
        );
      })();
    }
    clearInterval(intervalId);

    return () => clearInterval(intervalId);
  }, [setMsFromStart, timerOn]);
  return (
    <StatisticTextContainer>
      <OneLineContainer>
        <IconContainer>
          <FontAwesomeIcon icon={faHourglass} color="#05396e" />
        </IconContainer>
        <P>{convertToTime(msFromStart)}</P>
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
        {/* here all counted nap time */}
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
