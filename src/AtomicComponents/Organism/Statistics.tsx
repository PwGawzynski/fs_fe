import { StatisticsContainer } from '../Atoms/StyledContainers';
import { DisplayContainerSign } from '../Atoms/DisplayContainerSign';
import { UserWorkInfo } from './UserWorkInfo';
import { DoneTaskPieChart } from './DoneTaskPieChart';
import { DoneAreaPieChart } from './DoneAreaPieChart';

export const Statistics = () => {
  return (
    <StatisticsContainer>
      <DisplayContainerSign>STATISTICS</DisplayContainerSign>
      <UserWorkInfo />
      <DoneTaskPieChart />
      <DoneAreaPieChart />
    </StatisticsContainer>
  );
};
