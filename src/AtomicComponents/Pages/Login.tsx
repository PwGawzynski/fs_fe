import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { LoginForm } from '../Organism/LoginForm';
import { LogoImg } from '../Atoms/LogoImg';

export const Login = () => {
  return (
    <StyledDivContainer margin="0" flexDirection="column">
      <LogoImg width="40%" margin="15vh 0 2vh 0" />
      <LoginForm />
    </StyledDivContainer>
  );
};
