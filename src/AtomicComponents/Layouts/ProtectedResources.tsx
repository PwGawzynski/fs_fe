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
  setSession: React.Dispatch<React.SetStateAction<boolean>>,
  nav: NavigateFunction,
  user: any,
) => {
  if (!((await Api.checkSession()) && user)) {
    notificationContext.setNotification({
      display: true,
      message: 'Your session expired, please login again',
    });
    nav('./../login');
  } else setSession(true);
};

export const ProtectedResources = () => {
  const notificationContext = useContext(NotificationsContext);
  const [session, setSession] = useState(false);
  const nav = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    (async () => handleSession(notificationContext, setSession, nav, user))();
  }, [session, notificationContext, nav, user]);
  return session ? <Outlet /> : <div />;
};
