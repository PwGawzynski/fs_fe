import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogOutButton } from './LogOutButton';
import { TopBarHidden } from '../Atoms/TopBarContainer';
import { Button } from '../Atoms/Button';
import { useAuth } from '../../Utils/Hooks/authHook';

interface Props {
  menuOn: 'block' | 'none';
}

export const TopBarWhenOpeContext = (props: Props) => {
  const { menuOn } = props;
  const { user } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
  const isOwnerInPath = location.pathname.includes('owner');
  return (
    <TopBarHidden display={menuOn}>
      <LogOutButton />
      {user.owner && !isOwnerInPath && (
        <Button onClick={() => nav('../owner/desktop')}>
          Switch to Owner Desktop
        </Button>
      )}
    </TopBarHidden>
  );
};
