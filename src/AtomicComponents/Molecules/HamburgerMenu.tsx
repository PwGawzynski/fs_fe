import React from 'react';
import { HamburgerSlice } from '../Atoms/HamburgerSlice';
import { SlicesContainer } from '../Atoms/SlicesContainer';

interface Props {
  display: 'block' | 'none';
  onClick: () => void;
}
export const HamburgerMenu = (props: Props) => {
  const { display, onClick } = props;
  return (
    <SlicesContainer onClick={onClick}>
      <HamburgerSlice display={display} />
      <HamburgerSlice display={display} />
      <HamburgerSlice display={display} />
    </SlicesContainer>
  );
};
