import React from 'react';
import { Api } from '../Api/Api';
import { NotificationContextObj } from '../../ContextFactories/NotificationsContext';

export async function handleEOWorkClick(params: any[]) {
  // TODO add info how long workday was
  const [notification, setMsFromStart, setTimerOnOff, timerOn] = params;
  if (!notification && setMsFromStart && setTimerOnOff) return;
  let response;
  let onSuccessMessage;
  let onFailureMessage;
  if (timerOn) {
    response = await Api.closeCurrentWorkDay();
    if (response.status) {
      setTimerOnOff(false);
      (setMsFromStart as React.Dispatch<React.SetStateAction<number>>)(0);
    }
    onSuccessMessage =
      "Congrats you've done your work for today, see u tomorrow :)";
    onFailureMessage =
      'Sorry something went wrong, we cannot close your current work day, possible: ';
  } else {
    response = await Api.openNewWorkDay();
    onSuccessMessage = 'New Work Day has been correctly open';
    onFailureMessage =
      'Sorry something went wrong, we cannot open new work day for you, possible: ';
    if (response.status) setTimerOnOff(true);
  }
  if (response.status) {
    (notification as NotificationContextObj).setNotification({
      display: true,
      message: onSuccessMessage,
    });
  } else {
    (notification as NotificationContextObj).setNotification({
      display: true,
      message: `${onFailureMessage}  ${response.message}`,
    });
  }
}
