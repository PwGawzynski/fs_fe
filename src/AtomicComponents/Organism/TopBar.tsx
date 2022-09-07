import { useEffect, useState } from 'react';
import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { Api } from '../../Utils/Api/Api';
import { ProfilePicture } from '../Molecules/ProfilePicture';

export const TopBar = () => {
  const [profile, setProfile] = useState('');
  useEffect(() => {
    (async () => {
      const file = await Api.getUserProfilePicture();
      const img = URL.createObjectURL(file);
      setProfile(img);
    })();
  }, []);
  return (
    <StyledDivContainer
      height="5vh"
      flexDirection="row"
      justifyContent="flex-start"
      margin="2vh 0 0 2vh"
    >
      <ProfilePicture link={profile} />
    </StyledDivContainer>
  );
};
