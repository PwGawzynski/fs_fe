import React from 'react';
import { LogOutButton } from './LogOutButton';
import { TopBarHidden } from '../Atoms/TopBarContainer';

interface Props {
  menuOn: 'block' | 'none';
}

export const TopBarWhenOpeContext = (props: Props) => {
  const { menuOn } = props;
  return (
    <TopBarHidden display={menuOn}>
      <LogOutButton />
    </TopBarHidden>
  );
};
