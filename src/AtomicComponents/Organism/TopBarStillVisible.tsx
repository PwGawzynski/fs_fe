import React from 'react';
import { ProfilePhoto } from './ProfilePhoto';
import { Hamburger } from './Hamburger';
import { RolledTopBarContent } from '../Atoms/RolledTopBarContent';
import { OnTopBarLogo } from '../Molecules/OnTopBarLogo';

interface Props {
  menuOn: 'block' | 'none';
  setMenuOn: React.Dispatch<React.SetStateAction<'block' | 'none'>>;
}

export const TopBarStillVisible = (props: Props) => {
  const { menuOn, setMenuOn } = props;

  return (
    <RolledTopBarContent width="100%">
      <ProfilePhoto />
      <OnTopBarLogo />
      <Hamburger menuOn={menuOn} setMenuOn={setMenuOn} />
    </RolledTopBarContent>
  );
};
