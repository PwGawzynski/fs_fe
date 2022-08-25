import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { Img } from '../Atoms/Imge';
import LogoImg from '../../assets/images/logo.png';
import LoadingGip from '../../assets/images/spinner.gif';

export const AnimatedLoadingLogo = () => {
  return (
    <StyledDivContainer width="100%" display="flex" flexDirection="column">
      <Img width="80%" src={LogoImg} margin="0 0 30% 0" />
      <Img src={LoadingGip} width="10%" />
    </StyledDivContainer>
  );
};
