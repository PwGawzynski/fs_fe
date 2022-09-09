import React, { useEffect, useState } from 'react';
import { Api } from '../../Utils/Api/Api';
import { ProfilePicture } from '../Molecules/ProfilePicture';
import { TopBarContainer } from '../Atoms/TopBarContainer';
import { HamburgerMenu } from '../Molecules/HamburgerMenu';
import { StyledDivContainer } from '../Atoms/StyledDivContainer';

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
    <TopBarContainer onClick={() => handleClickOnHamburger(setMenuOn)}>
      <StyledDivContainer width="20%">
        <ProfilePicture link={profile} />
      </StyledDivContainer>

      <StyledDivContainer
        width="80%"
        justifyContent="flex-end"
        alignItems="center"
      >
        <HamburgerMenu display={menuOn} />
      </StyledDivContainer>
    </TopBarContainer>
  );
};
