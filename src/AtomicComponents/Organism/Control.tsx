import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControlCenter } from '../Atoms/StyledContainers';
import { DisplayContainerSign } from '../Atoms/DisplayContainerSign';
import { ControlCenterBtn } from '../Atoms/ControlCenterBtn';
import { NotificationsContext } from '../../ContextFactories/NotificationsContext';
import { handleEOWorkClick } from '../../Utils/onActionHandlers/handleEOWorkClick';
import { handleTakeNap } from '../../Utils/onActionHandlers/handleTakeNap';
import { handleStartTask } from '../../Utils/onActionHandlers/handleStartTask';
import { handleBadClickInfo } from '../../Utils/onActionHandlers/handleBadClickInfo';

export interface Props {
  setMsFromStart: React.Dispatch<React.SetStateAction<number>>;
  setNapTimerOnOff: React.Dispatch<React.SetStateAction<boolean>>;
  setTimerOnOff: React.Dispatch<React.SetStateAction<boolean>>;
  timerOn: boolean;
  napTimerOff: boolean;
}

export const Control = (props: Props) => {
  const {
    setMsFromStart,
    setTimerOnOff,
    timerOn,
    setNapTimerOnOff,
    napTimerOff,
  } = props;

  const notification = useContext(NotificationsContext);

  const nav = useNavigate();

  return (
    <ControlCenter>
      <DisplayContainerSign>CONTROL CENTER</DisplayContainerSign>
      <ControlCenterBtn
        firstColumn={2}
        firstRow={5}
        color={timerOn ? '#05396e' : napTimerOff ? '#7393B3' : '#FF5733'}
        onClickParams={[
          notification,
          setMsFromStart,
          setTimerOnOff,
          timerOn,
          setNapTimerOnOff,
          napTimerOff,
        ]}
        onClickHandler={
          timerOn || !napTimerOff
            ? handleTakeNap
            : () =>
                handleBadClickInfo(
                  notification,
                  'You must start work day, before take any new nap',
                )
        }
      >
        {napTimerOff ? 'TAKE A NAP' : 'RESUME WORK'}
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
        color={napTimerOff ? '#05396e' : '#7393B3'}
        onClickParams={[notification, setMsFromStart, setTimerOnOff, timerOn]}
        onClickHandler={handleEOWorkClick}
      >
        {timerOn
          ? 'END WORK FOR TODAY'
          : napTimerOff
          ? 'START NEW WORK DAsY'
          : 'END WORK FOR TODAY'}
      </ControlCenterBtn>

      <ControlCenterBtn
        firstColumn={12}
        firstRow={10}
        color={timerOn ? '#05396e' : '#7393B3'}
        onClickParams={[nav]}
        onClickHandler={
          timerOn
            ? handleStartTask
            : () =>
                handleBadClickInfo(
                  notification,
                  'You must start work day, before open any new task',
                )
        }
      >
        START TASK
      </ControlCenterBtn>

      <ControlCenterBtn firstColumn={12} firstRow={15} color="#05396e">
        IDN
      </ControlCenterBtn>
    </ControlCenter>
  );
};
