import React, { useState } from 'react';
import { TopBarContainer, TopBarHidden } from '../Atoms/TopBarContainer';
import { RolledTopBarContent } from '../Atoms/RolledTopBarContent';
import { ProfilePhoto } from './ProfilePhoto';
import { Hamburger } from './Hamburger';
import { LogOutButton } from './LogOutButton';

export const TopBar = () => {
  const [menuOn, setMenuOn] = useState('block' as 'block' | 'none');

  return (
    <TopBarContainer menuOn={menuOn === 'none'} height="auto">
      <RolledTopBarContent width="100%">
        <ProfilePhoto />
        <Hamburger menuOn={menuOn} setMenuOn={setMenuOn} />
      </RolledTopBarContent>
      <TopBarHidden display={menuOn}>
        <LogOutButton />
      </TopBarHidden>
    </TopBarContainer>
  );
};
