import React, { useState } from 'react';
import { TopBarContainer } from '../Atoms/TopBarContainer';
import { RolledTopBarContent } from '../Atoms/RolledTopBarContent';
import { ProfilePhoto } from './ProfilePhoto';
import { Hamburger } from './Hamburger';

export const TopBar = () => {
  const [menuOn, setMenuOn] = useState('block' as 'block' | 'none');

  return (
    <TopBarContainer menuOn={menuOn === 'none'} height="auto">
      <RolledTopBarContent width="100%">
        <ProfilePhoto />
        <Hamburger menuOn={menuOn} setMenuOn={setMenuOn} />
      </RolledTopBarContent>
    </TopBarContainer>
  );
};
