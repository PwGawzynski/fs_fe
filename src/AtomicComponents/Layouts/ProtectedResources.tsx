import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { useAuth } from '../../Utils/Hooks/authHook';
import { NotificationsContext } from '../../ContextFactories/NotificationsContext';

export const ProtectedResources = () => {
  const { user } = useAuth();
  const notificationContext = useContext(NotificationsContext);
  if (!user) {
    notificationContext.setNotification({
      display: true,
      message:
        'You are not authorised for this action, please log in and try again',
    });
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
