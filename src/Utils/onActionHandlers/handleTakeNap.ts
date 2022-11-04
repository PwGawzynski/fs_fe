import { Api } from '../Api/Api';
import { NotificationContextObj } from '../../ContextFactories/NotificationsContext';

export async function handleTakeNap(params: any[]) {
  // TODO add info how long workday was
  const [
    notification,
    setMsFromStart,
    setTimerOnOff,
    timerOn,
    setNapTimerOnOff,
    napTimerOff,
  ] = params;
  if (!(notification && setMsFromStart && setTimerOnOff && setNapTimerOnOff))
    return;
  let response;
  let onSuccessMessage;
  let onFailureMessage;
  if (timerOn) {
    response = await Api.takeNap();
    if (response.status) {
      setTimerOnOff(false);
      setNapTimerOnOff(false);
      // (setMsFromStart as React.Dispatch<React.SetStateAction<number>>)(0);
    }
    onSuccessMessage = 'Nap Start correctly ';
    onFailureMessage =
      'Sorry something went wrong, we cannot start new nap for you, possible: ';
  } else if (!napTimerOff) {
    response = await Api.endNap();
    setNapTimerOnOff(true);
    setTimerOnOff(true);
    onSuccessMessage = 'Nap Has been ended correctly';
    onFailureMessage =
      'Sorry something went wrong, we cannot close nap for you, possible: ';
    if (response.status) setTimerOnOff(true);
  }
  if (response?.status) {
    (notification as NotificationContextObj).setNotification({
      display: true,
      message: onSuccessMessage ?? '',
    });
  } else if (!response?.status && timerOn) {
    (notification as NotificationContextObj).setNotification({
      display: true,
      message: `${onFailureMessage}  ${response?.message}`,
    });
  }
}
