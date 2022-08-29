import styled from 'styled-components';

interface Props {
  width?: string;
  margin?: string;
}

export const Button = styled.button`
  width: ${(props: Props) => props.width || '100%'};
  border: none;
  background: linear-gradient(
    135deg,
    rgb(121, 241, 164) 10%,
    rgb(14, 92, 173) 100%
  );
  border-radius: 10px;
  height: 4vh;
  color: white;
  margin: ${(props: Props) => props.margin || '0'};
  font-size: medium;
  font-weight: 600;
`;
