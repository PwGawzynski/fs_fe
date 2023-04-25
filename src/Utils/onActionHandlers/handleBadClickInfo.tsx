import { NotificationContextObj } from '../../ContextFactories/NotificationsContext';

export const handleBadClickInfo = async (
  context: NotificationContextObj,
  infoString: string,
) => {
  context.setNotification({
    display: true,
    message: infoString,
  });
};
