import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { Img } from '../Atoms/Imge';
import LoadingGip from '../../assets/images/spinner.gif';
import { LogoImg } from '../Atoms/LogoImg';

export const AnimatedLoadingLogo = () => {
  return (
    <StyledDivContainer width="100%" display="flex" flexDirection="column">
      <LogoImg width="80%" margin="0 0 30% 0" />
      <Img src={LoadingGip} width="10%" />
    </StyledDivContainer>
  );
};
