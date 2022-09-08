import { Img } from '../Atoms/Imge';
import { CircleFrame } from '../Atoms/CircleFrame';

interface Props {
  link: string;
}

export const ProfilePicture = (props: Props) => {
  const { link } = props;
  return (
    <CircleFrame width="5vh" height="5vh">
      <Img width="100%" src={link} />
    </CircleFrame>
  );
};
