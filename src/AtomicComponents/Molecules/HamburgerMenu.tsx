import { HamburgerSlice } from '../Atoms/HamburgerSlice';
import { SlicesContainer } from '../Atoms/SlicesContainer';

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
