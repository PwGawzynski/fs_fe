import styled from 'styled-components';
import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { HamburgerSlice } from '../Atoms/HamburgerSlice';

const SlicesContainer = styled(StyledDivContainer)`
  padding-top: 8px;
  flex-direction: column;
  justify-content: flex-start;
  width: 10%;
  height: 5vh;
  box-sizing: border-box;
`;

interface Props {
  display: 'block' | 'none';
}
export const HamburgerMenu = (props: Props) => {
  const { display } = props;
  return (
    <SlicesContainer>
      <HamburgerSlice display={display} />
      <HamburgerSlice display={display} />
      <HamburgerSlice display={display} />
    </SlicesContainer>
  );
};
