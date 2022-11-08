import React from 'react';
import { SerializedTaskResponse } from 'types';
import { TaskCenter } from '../Atoms/StyledContainers';
import { DisplayContainerSign } from '../Atoms/DisplayContainerSign';
import { InsideCenterText } from '../Atoms/InsideCenterText';
import { convertToTime } from '../../Utils/helpers/convertToTime';

export interface Props {
  data: SerializedTaskResponse;
}

export const Task = ({ data }: Props) => {
  const startTime = new Date(data.performanceDay).getTime();
  const today = new Date().getTime();
  console.log();
  return (
    <TaskCenter>
      <DisplayContainerSign>OPENED TASK</DisplayContainerSign>
      <InsideCenterText gridRowStart={4}>{data.name}</InsideCenterText>
      <InsideCenterText gridRowStart={4} gridColStart={10}>
        {convertToTime(today - startTime)}
      </InsideCenterText>
    </TaskCenter>
  );
};
