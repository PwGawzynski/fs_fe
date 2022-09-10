import styled from 'styled-components';
import { StyledDivContainer } from './StyledDivContainer';

interface Props {
  menuOn: boolean;
}

export const TopBarContainer = styled(StyledDivContainer)`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 2px 10px #333333;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  justify-content: flex-start;
  height: ${(props: Props) => (props.menuOn ? '90vh' : '8vh')};
  transition-duration: 2000ms;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
`;

interface ITopBarHidden {
  display: 'block' | 'none';
}

export const TopBarHidden = styled(StyledDivContainer)`
  display: ${(props: ITopBarHidden) =>
    props.display === 'none' ? 'flex' : 'none'};
  align-items: flex-end;
`;
