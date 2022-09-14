import styled from 'styled-components';
import { StyledDivContainer } from './StyledDivContainer';

export const DesktopMainContainer = styled(StyledDivContainer)`
  flex-direction: column;
  // margin top is obligated because of topBar position absolute
  margin-top: 8vh;
`;
