import { NotificationsContextI } from '../../ContextFactories/NotificationsContext';
import { NotificationContainer } from '../Atoms/NotificationContainer';
import { NotificationsButtonLabel } from '../Molecules/NotificationsButtonLabel';
import { NotificationMessageBox } from '../Molecules/NotificationMessageBox';

export const NotificationsCard = (props: NotificationsContextI) => {
  const { message } = props;
  return (
    <NotificationContainer flexDirection="column">
      <NotificationMessageBox message={message} />
      <NotificationsButtonLabel />
    </NotificationContainer>
  );
};
