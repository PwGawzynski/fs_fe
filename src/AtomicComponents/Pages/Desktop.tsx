import { useEffect, useState } from 'react';
import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { Api } from '../../Utils/Api/Api';

export const Desktop = () => {
  const [test, setTest] = useState('');
  useEffect(() => {
    (async () => {
      const data = await Api.sendTest();
      if (data && data.message) {
        setTest(data.message);
      }
    })();
  }, []);
  return <StyledDivContainer>{test}</StyledDivContainer>;
};
