import React, { useContext, useState } from 'react';
import { SerializedTaskResponse } from 'types';
import { TopBar } from '../Organism/TopBar';
import { useAuth } from '../../Utils/Hooks/authHook';
import {
  DesktopMainContainer,
  OperationCenter,
} from '../Atoms/StyledContainers';
import { DesktopBg } from '../Atoms/DesktopBg';
import { Statistics } from '../Organism/Statistics';
import { Control } from '../Organism/Control';
import { DesktopSettingsContext } from '../../ContextFactories/DesktopSettingsContext';
import { Task } from '../Organism/Task';

export interface Props {
  currenOpenTask: SerializedTaskResponse;
}
export const Desktop = ({ currenOpenTask }: Props) => {
  const { user } = useAuth();
  const { worker, owner } = user;
  const [msFromStart, setMsFromStart] = useState(0);
  const [timerOn, setTimerOnOff] = useState(true);

  const [msNapFromStart, setMsNapFromStart] = useState(0);
  const [napTimerOff, setNapTimerOnOff] = useState(true);

  const { settings } = useContext(DesktopSettingsContext);

  return (
    <DesktopMainContainer>
      <TopBar />
      {settings.bgPhotoShowed && <DesktopBg />}
      {worker && owner}
      <OperationCenter height={settings.OperationCenterHeight}>
        <Statistics
          msFromStart={msFromStart}
          setMsFromStart={setMsFromStart}
          setTimerOnOff={setTimerOnOff}
          timerOn={timerOn}
          setMsNapFromStart={setMsNapFromStart}
          msNapFromStart={msNapFromStart}
          napTimerOff={napTimerOff}
        />
        <Control
          setTimerOnOff={setTimerOnOff}
          setMsFromStart={setMsFromStart}
          timerOn={timerOn}
          setNapTimerOnOff={setNapTimerOnOff}
          napTimerOff={napTimerOff}
        />
        {currenOpenTask?.id && (
          <Task data={currenOpenTask} stopTimerFlags={[timerOn]} />
        )}
      </OperationCenter>
    </DesktopMainContainer>
  );
};
