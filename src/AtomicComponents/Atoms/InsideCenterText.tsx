import styled from 'styled-components';
import { DisplayContainerSign } from './DisplayContainerSign';

export interface Props {
  gridRowStart: number;
  color?: string;
  gridColStart?: number;
  textAlign?: string;
}

export const InsideCenterText = styled(DisplayContainerSign)`
  grid-row-start: ${(props: Props) => `${props.gridRowStart}`};
  grid-column-start: ${(props: Props) => `${props.gridColStart || 0}`};
  grid-row-end: ${(props: Props) => `${props.gridRowStart + 3}`};
  color: ${(props: Props) => props.color || '#05396e'};
  text-align: ${(props: Props) => props.textAlign || 'start'};
  font-size: 100%;
`;
