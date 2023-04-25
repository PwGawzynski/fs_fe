import React from 'react';
import { StatisticsContainer } from '../Atoms/StyledContainers';
import { DisplayContainerSign } from '../Atoms/DisplayContainerSign';
import { UserWorkInfo } from './UserWorkInfo';
import { DoneTaskPieChart } from './DoneTaskPieChart';
import { DoneAreaPieChart } from './DoneAreaPieChart';

export interface Props {
  msFromStart: number;
  msNapFromStart: number;
  setMsFromStart: React.Dispatch<React.SetStateAction<number>>;
  setMsNapFromStart: React.Dispatch<React.SetStateAction<number>>;
  setTimerOnOff: React.Dispatch<React.SetStateAction<boolean>>;
  timerOn: boolean;
  napTimerOff: boolean;
}

export const Statistics = (props: Props) => {
  const {
    msFromStart,
    setMsFromStart,
    timerOn,
    setTimerOnOff,
    setMsNapFromStart,
    msNapFromStart,
    napTimerOff,
  } = props;

  return (
    <StatisticsContainer>
      <DisplayContainerSign>STATISTICS</DisplayContainerSign>
      <UserWorkInfo
        msNapFromStart={msNapFromStart}
        msFromStart={msFromStart}
        setMsFromStart={setMsFromStart}
        timerOn={timerOn}
        setTimerOnOff={setTimerOnOff}
        setMsNapFromStart={setMsNapFromStart}
        napTimerOff={napTimerOff}
      />
      <DoneTaskPieChart />
      <DoneAreaPieChart />
    </StatisticsContainer>
  );
};
