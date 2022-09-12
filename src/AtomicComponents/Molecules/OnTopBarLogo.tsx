import styled from 'styled-components';
import { LogoImg } from '../Atoms/LogoImg';

const LogoContainer = styled.div`
  width: 60%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const OnTopBarLogo = () => {
  return (
    <LogoContainer>
      <LogoImg width="30%" margin="0" />
    </LogoContainer>
  );
};
