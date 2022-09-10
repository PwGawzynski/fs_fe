import styled from 'styled-components';
import { StyledDivContainer } from './StyledDivContainer';

export const NotificationContainer = styled(StyledDivContainer)`
  position: absolute;
  width: 70vw;
  height: auto;
  border-radius: 20px;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  font-size: 1em;
  background-color: white;
  z-index: 200;
`;
