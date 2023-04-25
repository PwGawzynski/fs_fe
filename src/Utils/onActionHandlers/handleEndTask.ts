import { NavigateFunction } from 'react-router-dom';
import { SerializedTaskResponse } from 'types';
import React from 'react';
import { NotificationContextObj } from '../../ContextFactories/NotificationsContext';
import { Api } from '../Api/Api';
import { DesktopSettingsContextI } from '../../ContextFactories/DesktopSettingsContext';

export const handleEndTask = async (
  data: SerializedTaskResponse,
  nav: NavigateFunction,
  notification: NotificationContextObj,
  settings: DesktopSettingsContextI,
  setCurrentTask: React.Dispatch<
    React.SetStateAction<SerializedTaskResponse | undefined>
  >,
) => {
  const res = await Api.endTask(data.id);
  if (!res.status) {
    notification.setNotification({
      display: true,
      message:
        'Sorry we cannot end this task, something went wrong, please try again later',
    });
    nav('../desktop');
    return;
  }
  notification.setNotification({
    display: true,
    message: 'Task correctly ended !',
    onClickAction: () => nav(0),
  });
  settings.setDesktopSettings((prev) => ({
    ...prev,
    OperationCenterHeight: '65vh',
    bgPhotoShowed: true,
    reloadFlag: true,
  }));
  setCurrentTask(undefined);
  nav('../desktop');
};
