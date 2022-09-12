import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import { Notification } from '../AtomicComponents/Pages/Notification';
import { Desktop } from '../AtomicComponents/Pages/Desktop';
import { Register } from '../AtomicComponents/Pages/Register';
import {
  NotificationsContext,
  NotificationsContextI,
} from '../ContextFactories/NotificationsContext';
import { Login } from '../AtomicComponents/Pages/Login';
import { AuthProvider } from '../Utils/Hooks/authHook';
import { ProtectedResources } from '../AtomicComponents/Layouts/ProtectedResources';

export const App = () => {
  const [notification, setNotification] = useState({
    display: false,
    message: '',
  } as NotificationsContextI);

  const notificationMemo = useMemo(() => {
    return {
      notification,
      setNotification,
    };
  }, [notification, setNotification]);
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotificationsContext.Provider value={notificationMemo}>
          <Routes>
            <Route path="/protected" element={<ProtectedResources />}>
              <Route path="desktop" element={<Desktop />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Notification
            display={notification.display}
            message={notification.message}
          />
        </NotificationsContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};
