import styled from 'styled-components';

interface Props {
  width: string;
  margin?: string;
}

export const Img = styled.img`
  width: ${(props: Props) => props.width || '100%'};
  height: auto;
  margin: ${(props: Props) => props.margin || '0'};
`;
