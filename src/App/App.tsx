import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import { Notification } from '../AtomicComponents/Pages/Notification';
import { Desktop } from '../AtomicComponents/Pages/Desktop';
import { Register } from '../AtomicComponents/Pages/Register';
import {
  NotificationsContext,
  NotificationsContextI,
} from '../ContextFactories/NotificationsContext';

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
      <NotificationsContext.Provider value={notificationMemo}>
        <Routes>
          <Route path="/" element={<Desktop />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Notification
          display={notification.display}
          message={notification.message}
        />
      </NotificationsContext.Provider>
    </BrowserRouter>
  );
};