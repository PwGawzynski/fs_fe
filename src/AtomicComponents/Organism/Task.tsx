import React from 'react';
import { SerializedTaskResponse } from 'types';
import { TaskCenter } from '../Atoms/StyledContainers';
import { DisplayContainerSign } from '../Atoms/DisplayContainerSign';
import { InsideCenterText } from '../Atoms/InsideCenterText';

export interface Props {
  data: SerializedTaskResponse;
}

export const Task = ({ data }: Props) => {
  return (
    <TaskCenter>
      <DisplayContainerSign>OPEN TASK</DisplayContainerSign>
      <InsideCenterText gridRowStart={6}>{data.name}</InsideCenterText>
    </TaskCenter>
  );
};
