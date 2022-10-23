import React, { useContext } from 'react';
import { ControlCenter } from '../Atoms/StyledContainers';
import { DisplayContainerSign } from '../Atoms/DisplayContainerSign';
import { ControlCenterBtn } from '../Atoms/ControlCenterBtn';
import { NotificationsContext } from '../../ContextFactories/NotificationsContext';
import { handleEOWorkClick } from '../../Utils/controlCenterHelpers/handleEOWorkClick';
import { handleTakeNap } from '../../Utils/controlCenterHelpers/handleTakeNap';

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
        onClickHandler={handleTakeNap}
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

      <ControlCenterBtn firstColumn={12} firstRow={10} color="#05396e">
        IDN
      </ControlCenterBtn>

      <ControlCenterBtn firstColumn={12} firstRow={15} color="#05396e">
        IDN
      </ControlCenterBtn>
    </ControlCenter>
  );
};
