import React, { useContext } from 'react';
import { ControlCenter } from '../Atoms/StyledContainers';
import { DisplayContainerSign } from '../Atoms/DisplayContainerSign';
import { ControlCenterBtn } from '../Atoms/ControlCenterBtn';
import { Api } from '../../Utils/Api/Api';
import {
  NotificationContextObj,
  NotificationsContext,
} from '../../ContextFactories/NotificationsContext';

async function handleEOWorkClick(params: any[]) {
  // TODO add info how long workday was
  const [notification, setMsFromStart, setTimerOnOff, timerOn] = params;
  if (!notification && setMsFromStart && setTimerOnOff) return;
  let response;
  let onSuccessMessage;
  let onFailureMessage;
  if (timerOn) {
    response = await Api.closeCurrentWorkDay();
    onSuccessMessage =
      "Congrats you've done your work for today, see u tomorrow";
    onFailureMessage =
      'Sorry something went wrong, we cannot close your current work day, possible: ';
    setTimerOnOff(false);
    setMsFromStart(0);
  } else {
    response = await Api.openNewWorkDay();
    onSuccessMessage = 'New Work Day has been correctly open';
    onFailureMessage =
      'Sorry something went wrong, we cannot open new work day for you, possible: ';
    setTimerOnOff(true);
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

export interface Props {
  setMsFromStart: React.Dispatch<React.SetStateAction<number>>;
  setTimerOnOff: React.Dispatch<React.SetStateAction<boolean>>;
  timerOn: boolean;
}

export const Control = (props: Props) => {
  const { setMsFromStart, setTimerOnOff, timerOn } = props;

  const notification = useContext(NotificationsContext);
  return (
    <ControlCenter>
      <DisplayContainerSign>CONTROL CENTER</DisplayContainerSign>
      <ControlCenterBtn firstColumn={2} firstRow={5} color="#05396e">
        TAKE A NAP
      </ControlCenterBtn>

      <ControlCenterBtn firstColumn={2} firstRow={10} color="#05396e">
        REPORT MACHINE DAMAGE
      </ControlCenterBtn>

      <ControlCenterBtn firstColumn={2} firstRow={15} color="#05396e">
        REPORT OUT OF RESOURCES
      </ControlCenterBtn>

      <ControlCenterBtn
        firstColumn={12}
        firstRow={5}
        color="#05396e"
        onClickParams={[notification, setMsFromStart, setTimerOnOff, timerOn]}
        onClickHandler={handleEOWorkClick}
      >
        {timerOn ? 'END WORK FOR TODAY' : 'START NEW WORK DAY'}
      </ControlCenterBtn>

      <ControlCenterBtn firstColumn={12} firstRow={10} color="#05396e">
        IDN
      </ControlCenterBtn>

      <ControlCenterBtn firstColumn={12} firstRow={15} color="#05396e">
        IDN
      </ControlCenterBtn>
    </ControlCenter>
  );
};
