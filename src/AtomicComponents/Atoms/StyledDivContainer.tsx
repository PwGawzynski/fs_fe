import styled from 'styled-components';

interface Props {
  width?: string;
  height?: string;
  display?: 'flex' | 'block';
  flexDirection?: string;
  alignItems?: 'flex-start' | 'flex-end' | 'center';
  justifyContent?: 'flex-start' | 'flex-end' | 'center';
  margin?: string;
}

export const StyledDivContainer = styled.div`
  margin: ${(props: Props) => props.margin || '0'};
  width: ${(props: Props) => props.width || '100%'};
  height: ${(props: Props) => props.height || '100%'};
  display: ${(props: Props) => props.display || 'flex'};
  flex-direction: ${(props: Props) => props.flexDirection};
  align-items: ${(props: Props) => props.alignItems || 'center'};
  justify-content: ${(props: Props) => props.justifyContent || 'center'};
`;
