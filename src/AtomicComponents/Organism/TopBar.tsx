import { useEffect, useState } from 'react';
import { Api } from '../../Utils/Api/Api';
import { ProfilePicture } from '../Molecules/ProfilePicture';
import { TopBarContainer } from '../Atoms/TopBarContainer';
import { HamburgerMenu } from '../Molecules/HamburgerMenu';

export const TopBar = () => {
  const [profile, setProfile] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menuOn, setMenuOn] = useState('block' as 'block' | 'none');
  useEffect(() => {
    (async () => {
      const file = await Api.getUserProfilePicture();
      const img = URL.createObjectURL(file);
      setProfile(img);
    })();
  }, []);
  return (
    <TopBarContainer>
      <ProfilePicture link={profile} />
      <HamburgerMenu display={menuOn} />
    </TopBarContainer>
  );
};
