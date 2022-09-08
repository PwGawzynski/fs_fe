import styled from 'styled-components';
import { StyledDivContainer } from './StyledDivContainer';

export const CircleFrame = styled(StyledDivContainer)`
  border: 0.5px solid rgba(51, 51, 51, 0.5);
  box-shadow: 1px -1px 2px rgba(51, 51, 51, 0.4);
  border-radius: 50%;
  overflow: hidden;
`;
