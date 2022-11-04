import styled from 'styled-components';

export interface Props {
  fontSize?: 'large' | 'medium' | 'x-large';
}

export const TaskInsideP = styled.p`
  margin: 0;
  padding: 0;
  font-family: Roboto;
  font-size: ${(props: Props) => props.fontSize || 'medium'};
`;
