import React from 'react';
import { HamburgerMenu } from '../Molecules/HamburgerMenu';
import { RolledTopBarContent } from '../Atoms/RolledTopBarContent';

interface Props {
  menuOn: 'block' | 'none';
  setMenuOn: React.Dispatch<React.SetStateAction<'block' | 'none'>>;
}

const handleClickOnHamburger = (
  setMenu: React.Dispatch<React.SetStateAction<'block' | 'none'>>,
) => {
  setMenu((prevState) => (prevState === 'block' ? 'none' : 'block'));
};

export const Hamburger = (props: Props) => {
  const { menuOn, setMenuOn } = props;
  return (
    <RolledTopBarContent width="20%" justifyContent="flex-end">
      <HamburgerMenu
        display={menuOn}
        onClick={() => handleClickOnHamburger(setMenuOn)}
      />
    </RolledTopBarContent>
  );
};
