import { NotificationMessage } from '../Atoms/NotificationMessage';
import { StyledDivContainer } from '../Atoms/StyledDivContainer';

interface Props {
  message: string;
}

export const NotificationMessageBox = (props: Props) => {
  const { message } = props;
  return (
    <StyledDivContainer height="auto" width="100%">
      <NotificationMessage>{message}</NotificationMessage>
    </StyledDivContainer>
  );
};
