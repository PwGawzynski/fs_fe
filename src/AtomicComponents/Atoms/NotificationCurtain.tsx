import styled from 'styled-components';
import { StyledDivContainer } from './StyledDivContainer';

interface Props {
  display: 'block' | 'none';
}

export const NotificationCurtain = styled(StyledDivContainer)`
  background-color: white;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props: Props) => props.display};
  z-index: 300;
`;
