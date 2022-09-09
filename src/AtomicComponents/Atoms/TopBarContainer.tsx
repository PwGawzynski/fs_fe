import styled from 'styled-components';
import { StyledDivContainer } from './StyledDivContainer';

export const TopBarContainer = styled(StyledDivContainer)`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 2px 10px #333333;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 8vh;
`;
