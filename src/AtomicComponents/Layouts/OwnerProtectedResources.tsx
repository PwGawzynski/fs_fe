import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import {
  NotificationContextObj,
  NotificationsContext,
} from '../../ContextFactories/NotificationsContext';
import { Api } from '../../Utils/Api/Api';
import { useAuth } from '../../Utils/Hooks/authHook';

const handleSession = async (
  notificationContext: NotificationContextObj,
  setPrivileges: React.Dispatch<React.SetStateAction<boolean>>,
  nav: NavigateFunction,
  user: any,
) => {
  if (!((await Api.checkSession()) && user)) {
    notificationContext.setNotification({
      display: true,
      message: 'Your session expired, please login again',
    });
    nav('./../login');
  } else if (user.owner) setPrivileges(true);
  else {
    notificationContext.setNotification({
      display: true,
      message: 'You do not own privileges to perform this action',
    });
    nav('./../login');
  }
};

export const OwnerProtectedResources = () => {
  const notificationContext = useContext(NotificationsContext);
  const [privileges, setPrivileges] = useState(false);
  const nav = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    (async () =>
      handleSession(notificationContext, setPrivileges, nav, user))();
  }, [privileges, notificationContext, nav, user]);
  return privileges ? <Outlet /> : <div />;
};
