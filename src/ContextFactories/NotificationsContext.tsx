import React, { createContext } from 'react';

export interface NotificationsContextI {
  display: boolean;
  message: string;
}
export interface NotificationContextObj {
  notification: NotificationsContextI;
  setNotification: React.Dispatch<React.SetStateAction<NotificationsContextI>>;
}
export const NotificationsContext = createContext({} as NotificationContextObj);
