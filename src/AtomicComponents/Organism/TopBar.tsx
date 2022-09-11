import React, { useState } from 'react';
import { TopBarContainer } from '../Atoms/TopBarContainer';
import { TopBarStillVisible } from './TopBarStillVisible';
import { TopBarWhenOpeContext } from './TopBarWhenOpeContext';

export const TopBar = () => {
  const [menuOn, setMenuOn] = useState('block' as 'block' | 'none');

  return (
    <TopBarContainer menuOn={menuOn === 'none'} height="auto">
      <TopBarStillVisible menuOn={menuOn} setMenuOn={setMenuOn} />
      <TopBarWhenOpeContext menuOn={menuOn} />
    </TopBarContainer>
  );
};
