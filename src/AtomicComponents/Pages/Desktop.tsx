import { useState } from 'react';
import { TopBar } from '../Organism/TopBar';
import { useAuth } from '../../Utils/Hooks/authHook';
import {
  DesktopMainContainer,
  OperationCenter,
} from '../Atoms/StyledContainers';
import { DesktopBg } from '../Atoms/DesktopBg';
import { Statistics } from '../Organism/Statistics';
import { Control } from '../Organism/Control';

export const Desktop = () => {
  const { user } = useAuth();
  const { worker, owner } = user;
  const [msFromStart, setMsFromStart] = useState(0);
  const [timerOn, setTimerOnOff] = useState(true);

  // const [msNapFromStart, setMsNapFromStart] = useState(0);
  const [napTimerOff, setNapTimerOnOff] = useState(true);

  return (
    <DesktopMainContainer>
      <TopBar />
      <DesktopBg />
      {worker && owner}
      <OperationCenter>
        <Statistics
          msFromStart={msFromStart}
          setMsFromStart={setMsFromStart}
          setTimerOnOff={setTimerOnOff}
          timerOn={timerOn}
        />
        <Control
          setTimerOnOff={setTimerOnOff}
          setMsFromStart={setMsFromStart}
          timerOn={timerOn}
          setNapTimerOnOff={setNapTimerOnOff}
          napTimerOff={napTimerOff}
        />
      </OperationCenter>
    </DesktopMainContainer>
  );
};
