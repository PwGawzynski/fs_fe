import React, { useEffect, useState } from 'react';
import { SerializedTaskResponse } from 'types';
import { TaskCenter } from '../Atoms/StyledContainers';
import { DisplayContainerSign } from '../Atoms/DisplayContainerSign';
import { InsideCenterText } from '../Atoms/InsideCenterText';
import { Timer } from './Timer';

export interface Props {
  data: SerializedTaskResponse;
  // each flag must be true to let timer work
  stopTimerFlags: Array<boolean>;
}

export const Task = ({ data, stopTimerFlags }: Props) => {
  const [ms, setMs] = useState(new Date().getTime() - data.startDate.getTime());
  useEffect(() => {
    if (stopTimerFlags.find((f) => !f) === undefined) {
      setMs(new Date().getTime() - data.startDate.getTime());
    }
    return () => setMs(0);
  }, [data.startDate, setMs, stopTimerFlags]);
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
    </TaskCenter>
  );
};
