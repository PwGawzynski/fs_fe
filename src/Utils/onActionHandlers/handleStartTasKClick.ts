import { NavigateFunction } from 'react-router-dom';
import React from 'react';
import { SerializedTaskResponse } from 'types';
import { NotificationContextObj } from '../../ContextFactories/NotificationsContext';
import { Api } from '../Api/Api';
import { DesktopSettingsContextI } from '../../ContextFactories/DesktopSettingsContext';

export const handleStartTasKClick = async (
  data: SerializedTaskResponse,
  nav: NavigateFunction,
  notification: NotificationContextObj,
  settings: DesktopSettingsContextI,
  setCurrentTask: React.Dispatch<
    React.SetStateAction<SerializedTaskResponse | undefined>
  >,
) => {
  const res = await Api.startTask(data.id);
  if (!res.status) {
    notification.setNotification({
      display: true,
      message:
        'Sorry we cannot start this task, something went wrong, please try again later',
    });
    nav('../desktop');
    return;
  }
  notification.setNotification({
    display: true,
    message: 'Task correctly started !',
  });
  settings.setDesktopSettings((prev) => ({
    ...prev,
    OperationCenterHeight: '92vh',
    bgPhotoShowed: false,
  }));
  const customData: SerializedTaskResponse = data;
  // this assignation is for save start date of task and avoid unnecessary server req
  customData.startDate = new Date();
  setCurrentTask(customData);
  nav('../desktop');
};
