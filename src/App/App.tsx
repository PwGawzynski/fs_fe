import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import { SerializedTaskResponse } from 'types';
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
import { TasksList } from '../AtomicComponents/Pages/TasksList';
import {
  DesktopSettingsContext,
  DesktopSettingsContextElementsI,
  DesktopSettingsContextI,
} from '../ContextFactories/DesktopSettingsContext';

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

  const [desktopSettings, setDesktopSettings] = useState({
    OperationCenterHeight: '65vh',
    bgPhotoShowed: true,
  } as DesktopSettingsContextElementsI);

  const settingsMemo = useMemo(
    () =>
      ({
        settings: desktopSettings,
        setDesktopSettings,
      } as DesktopSettingsContextI),
    [desktopSettings, setDesktopSettings],
  );
  const [openTask, setOpenTask] = useState(
    {} as SerializedTaskResponse | undefined,
  );
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotificationsContext.Provider value={notificationMemo}>
          <DesktopSettingsContext.Provider value={settingsMemo}>
            <Routes>
              <Route path="/protected" element={<ProtectedResources />}>
                <Route
                  path="desktop"
                  element={
                    <Desktop
                      currenOpenTask={openTask}
                      setCurrentTask={setOpenTask}
                    />
                  }
                />
                <Route
                  path="today-tasks"
                  element={
                    <TasksList
                      setCurrentTask={setOpenTask}
                      currenOpenTask={openTask}
                    />
                  }
                />
              </Route>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Notification
              display={notification.display}
              message={notification.message}
            />
          </DesktopSettingsContext.Provider>
        </NotificationsContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};
