import styled from 'styled-components';

interface Props {
  display: 'block' | 'none';
}

export const HamburgerSlice = styled.div`
  width: 100%;
  min-height: 0.45vh;
  margin-bottom: 20%;
  background-color: #013237;
  border-radius: 10px;
  display: ${(props: Props) => props.display};
`;
