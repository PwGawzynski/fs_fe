import LoadingGip from '../../assets/images/spinner.gif';
import { Img } from './Imge';

interface Props {
  width: string;
}
export const LoadingSpinner = (props: Props) => {
  const { width } = props;
  return <Img src={LoadingGip} width={width} />;
};
