import React, { useContext, useEffect, useState } from 'react';
import { SerializedTaskResponse } from 'types';
import { useNavigate } from 'react-router-dom';
import { TaskCenter } from '../Atoms/StyledContainers';
import { DisplayContainerSign } from '../Atoms/DisplayContainerSign';
import { InsideCenterText } from '../Atoms/InsideCenterText';
import { Timer } from './Timer';
import { NavBtn } from '../Molecules/Navbtn';
import { handleEndTask } from '../../Utils/onActionHandlers/handleEndTask';
import { NotificationsContext } from '../../ContextFactories/NotificationsContext';
import { DesktopSettingsContext } from '../../ContextFactories/DesktopSettingsContext';

export interface Props {
  data: SerializedTaskResponse;
  // each flag must be true to let timer work
  stopTimerFlags: Array<boolean>;
  setCurrentTask: React.Dispatch<
    React.SetStateAction<SerializedTaskResponse | undefined>
  >;
}

export const Task = ({ data, stopTimerFlags, setCurrentTask }: Props) => {
  const nav = useNavigate();
  const infoScreen = useContext(NotificationsContext);
  const settings = useContext(DesktopSettingsContext);
  const [ms, setMs] = useState(new Date().getTime() - data.startDate.getTime());
  useEffect(() => {
    if (stopTimerFlags.find((f) => !f) === undefined) {
      setMs(new Date().getTime() - data.startDate.getTime());
    }
    return () => setMs(0);
  }, [data.startDate, setMs, stopTimerFlags]);
  // TODO performance date is shown in bad place refactor it
  return (
    <TaskCenter>
      <DisplayContainerSign>OPENED TASK</DisplayContainerSign>
      <InsideCenterText gridRowStart={4}>{data.name}</InsideCenterText>
      <InsideCenterText gridRowStart={4} gridColStart={10}>
        <Timer
          initMs={ms / 1000}
          on={stopTimerFlags.find((f) => !f) === undefined}
        />
      </InsideCenterText>
      <InsideCenterText gridRowStart={8}>Performance day </InsideCenterText>
      <InsideCenterText gridRowStart={8} gridColStart={13} textAlign="center">
        {new Date(data.performanceDay).toLocaleDateString()}
      </InsideCenterText>
      <InsideCenterText gridRowStart={16}>
        <NavBtn
          onBtnText="END THIS TASK"
          onClickHandler={() =>
            handleEndTask(data, nav, infoScreen, settings, setCurrentTask)
          }
          enabled
        />
      </InsideCenterText>
    </TaskCenter>
  );
};
