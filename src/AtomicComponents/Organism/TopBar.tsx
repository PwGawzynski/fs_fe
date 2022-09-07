import { useEffect, useState } from 'react';
import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { Img } from '../Atoms/Imge';
import { Api } from '../../Utils/Api/Api';

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
      height="8vh"
      flexDirection="row"
      justifyContent="flex-start"
    >
      <Img width="20%" src={profile} />
    </StyledDivContainer>
  );
};
