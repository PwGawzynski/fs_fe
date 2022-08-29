import { NotificationsContextI } from '../../ContextFactories/NotificationsContext';
import { NotificationsCard } from '../Organism/NotificationsCard';
import { NotificationCurtain } from '../Atoms/NotificationCurtain';

export const Notification = (props: NotificationsContextI) => {
  const { display, message } = props;
  return (
    <NotificationCurtain display={display ? 'block' : 'none'}>
      <NotificationsCard display={display} message={message} />
    </NotificationCurtain>
  );
};
