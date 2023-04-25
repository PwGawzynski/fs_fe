import { SerializedTaskResponse } from 'types';
import { Api } from '../Api/Api';

export const handleFetchTaskList = async () => {
  const data = await Api.getAllTasks();
  if (data.status) return data.data as SerializedTaskResponse[];
  return [];
};
