import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { RegisterForm } from '../Organism/RegisterForm';
import { LogoImg } from '../Atoms/LogoImg';

export const Register = () => {
  return (
    <StyledDivContainer margin="0" flexDirection="column">
      <LogoImg width="40%" margin="0" />
      <RegisterForm />
    </StyledDivContainer>
  );
};
