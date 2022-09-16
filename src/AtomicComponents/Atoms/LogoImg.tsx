import { Img } from './Imge';
import LogoImgResource from '../../assets/images/logo.webp';

interface Prps {
  width: string;
  margin: string;
}

export const LogoImg = (props: Prps) => {
  const { width } = props;
  const { margin } = props;
  return <Img width={width} src={LogoImgResource} margin={margin} />;
};
