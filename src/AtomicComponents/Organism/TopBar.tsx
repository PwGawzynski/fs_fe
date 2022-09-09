import React, { useEffect, useState } from 'react';
import { Api } from '../../Utils/Api/Api';
import { ProfilePicture } from '../Molecules/ProfilePicture';
import { TopBarContainer } from '../Atoms/TopBarContainer';
import { HamburgerMenu } from '../Molecules/HamburgerMenu';
import { InsideTopBarContainer } from '../Atoms/InsideTopBarContainer';

const handleClickOnHamburger = (
  setMenu: React.Dispatch<React.SetStateAction<'block' | 'none'>>,
) => {
  setMenu((prevState) => (prevState === 'block' ? 'none' : 'block'));
};

export const TopBar = () => {
  const [profile, setProfile] = useState('');
  const [menuOn, setMenuOn] = useState('block' as 'block' | 'none');

  useEffect(() => {
    (async () => {
      const file = await Api.getUserProfilePicture();
      const img = URL.createObjectURL(file);
      setProfile(img);
    })();
  }, []);

  return (
    <TopBarContainer
      menuOn={menuOn === 'none'}
      onClick={() => handleClickOnHamburger(setMenuOn)}
      height="auto"
    >
      <InsideTopBarContainer width="100%">
        <InsideTopBarContainer width="20%">
          <ProfilePicture link={profile} />
        </InsideTopBarContainer>

        <InsideTopBarContainer width="80%" justifyContent="flex-end">
          <HamburgerMenu display={menuOn} />
        </InsideTopBarContainer>
      </InsideTopBarContainer>
    </TopBarContainer>
  );
};
