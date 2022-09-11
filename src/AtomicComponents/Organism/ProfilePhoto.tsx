import React, { useEffect, useState } from 'react';
import { ProfilePicture } from '../Molecules/ProfilePicture';
import { RolledTopBarContent } from '../Atoms/RolledTopBarContent';
import { Api } from '../../Utils/Api/Api';

export const ProfilePhoto = () => {
  const [profile, setProfile] = useState('');

  useEffect(() => {
    (async () => {
      const file = await Api.getUserProfilePicture();
      const img = URL.createObjectURL(file);
      setProfile(img);
    })();
  }, []);

  return (
    <RolledTopBarContent width="20%">
      <ProfilePicture link={profile} />
    </RolledTopBarContent>
  );
};
