import styled from 'styled-components';
import { DisplayContainerSign } from './DisplayContainerSign';

export interface Props {
  gridRowStart: number;
  color?: string;
}

export const InsideCenterText = styled(DisplayContainerSign)`
  grid-row-start: ${(props: Props) => `${props.gridRowStart}`};
  grid-row-end: ${(props: Props) => `${props.gridRowStart + 3}`};
  color: ${(props: Props) => props.color || '#05396e'};
`;
