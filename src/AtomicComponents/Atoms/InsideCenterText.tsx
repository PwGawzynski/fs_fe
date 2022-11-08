import styled from 'styled-components';
import { DisplayContainerSign } from './DisplayContainerSign';

export interface Props {
  gridRowStart: number;
  color?: string;
  gridColStart?: number;
}

export const InsideCenterText = styled(DisplayContainerSign)`
  grid-row-start: ${(props: Props) => `${props.gridRowStart}`};
  grid-column-start: ${(props: Props) => `${props.gridColStart || 0}`};
  grid-row-end: ${(props: Props) => `${props.gridRowStart + 3}`};
  color: ${(props: Props) => props.color || '#05396e'};
  font-size: 100%;
`;
