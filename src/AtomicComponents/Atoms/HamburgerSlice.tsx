import styled from 'styled-components';

interface Props {
  display: 'block' | 'none';
}

export const HamburgerSlice = styled.div`
  width: 100%;
  min-height: 0.48vh;
  background-color: #013237;
  border-radius: 10px;
  display: block;
  transition-duration: 2000ms;
  transition-timing-function: ease-out;
  transform: ${(props: Props) =>
    props.display === 'none' ? 'translateY(50%) rotate(45deg)' : 'none'};
  &:nth-child(2) {
    margin: 15% 0;
    display: ${(props: Props) => props.display};
  }
  &:nth-child(3) {
    transform: ${(props: Props) =>
      props.display === 'none' ? 'translateY(-50%) rotate(-45deg)' : 'none'};
  }
`;
