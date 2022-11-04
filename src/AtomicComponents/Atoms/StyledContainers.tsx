import styled from 'styled-components';
import { StyledDivContainer } from './StyledDivContainer';

export const DesktopMainContainer = styled(StyledDivContainer)`
  flex-direction: column;
  // margin top is obligated because of topBar position absolute
  margin-top: 8vh;
`;

export interface OperationCenterProps {
  height?: string;
}

export const OperationCenter = styled.div`
  width: 100vw;
  height: ${(props: OperationCenterProps) => props.height || '65vh'};
  -webkit-border-top-left-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  background-color: white;
  position: absolute;
  top: ${(props: OperationCenterProps) =>
    props.height === '65vh' ? '35vh' : '8vh'};
  box-shadow: 5px -10px 50px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(10, 10vw);
  grid-template-rows: ${(props: OperationCenterProps) =>
    props.height === '65vh' ? 'repeat(13, 5vh)' : 'repeat(23, 4vh)'};
`;

export const StatisticsContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 10;
  grid-row-start: 2;
  grid-row-end: 7;
  background-color: #53ec8e;
  justify-self: stretch;
  border-radius: 10px;
  // inside container grid settings
  display: grid;
  grid-template-columns: repeat(20, 5%);
  grid-template-rows: repeat(20, 5%);
`;

export const ControlCenter = styled(StatisticsContainer)`
  grid-row-start: 8;
  grid-row-end: 13;
`;

export const TaskCenter = styled(StatisticsContainer)`
  grid-row-start: 14;
  grid-row-end: 20;
`;

export const StatisticTextContainer = styled.div`
  grid-column: 8 / 20;
  grid-row: 4 / 20;
  background-color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 10%);
`;
