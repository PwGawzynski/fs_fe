import { StatisticsContainer } from '../Atoms/StyledContainers';
import { DisplayContainerSign } from '../Atoms/DisplayContainerSign';
import { UserWorkInfo } from './UserWorkInfo';

export const Statistics = () => {
  return (
    <StatisticsContainer>
      <DisplayContainerSign>STATISTICS</DisplayContainerSign>
      <UserWorkInfo />
    </StatisticsContainer>
  );
};
