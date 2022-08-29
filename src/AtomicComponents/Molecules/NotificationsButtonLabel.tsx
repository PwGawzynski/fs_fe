import { useContext } from 'react';
import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { Button } from '../Atoms/Button';
import { NotificationsContext } from '../../ContextFactories/NotificationsContext';

export const NotificationsButtonLabel = () => {
  const { setNotification } = useContext(NotificationsContext);
  return (
    <StyledDivContainer height="20%" flexDirection="row">
      <Button
        width="90%"
        margin="10%"
        onClick={() =>
          setNotification((prev) => {
            return { ...prev, display: false };
          })
        }
      >
        Accept
      </Button>
    </StyledDivContainer>
  );
};
