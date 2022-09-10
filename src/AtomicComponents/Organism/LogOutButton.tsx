import { useContext } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Button } from '../Atoms/Button';
import { Api } from '../../Utils/Api/Api';
import {
  NotificationContextObj,
  NotificationsContext,
} from '../../ContextFactories/NotificationsContext';

const handleOnClick = async (
  notification: NotificationContextObj,
  nav: NavigateFunction,
) => {
  if ((await Api.sendLogOutAsk()).status) {
    notification.setNotification({
      display: true,
      message: 'You are lodged out correctly!',
    });
    nav('/login');
    return;
  }
  notification.setNotification({
    display: true,
    message: 'Something went wrong, please try again later',
  });
};

export const LogOutButton = () => {
  const notification = useContext(NotificationsContext);
  const nav = useNavigate();
  return (
    <Button onClick={() => handleOnClick(notification, nav)} margin="5% 0 5% 0">
      Log Out
    </Button>
  );
};
