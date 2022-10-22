import React from 'react';
import { StatisticsContainer } from '../Atoms/StyledContainers';
import { DisplayContainerSign } from '../Atoms/DisplayContainerSign';
import { UserWorkInfo } from './UserWorkInfo';
import { DoneTaskPieChart } from './DoneTaskPieChart';
import { DoneAreaPieChart } from './DoneAreaPieChart';

export interface Props {
  msFromStart: number;
  setMsFromStart: React.Dispatch<React.SetStateAction<number>>;
  timerOn: boolean;
}

export const Statistics = (props: Props) => {
  const { msFromStart, setMsFromStart, timerOn } = props;

  return (
    <StatisticsContainer>
      <DisplayContainerSign>STATISTICS</DisplayContainerSign>
      <UserWorkInfo
        msFromStart={msFromStart}
        setMsFromStart={setMsFromStart}
        timerOn={timerOn}
      />
      <DoneTaskPieChart />
      <DoneAreaPieChart />
    </StatisticsContainer>
  );
};
