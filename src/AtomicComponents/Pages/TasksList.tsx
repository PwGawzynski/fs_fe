import React, { useEffect, useState } from 'react';
import { SerializedTaskResponse } from 'types';
import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { handleFetchTaskList } from '../../Utils/onActionHandlers/handleFetchTaskList';
import { SingleTask } from '../Organism/SingleTask';

export interface Props {
  setCurrentTask: React.Dispatch<React.SetStateAction<SerializedTaskResponse>>;
  currenOpenTask: SerializedTaskResponse | undefined;
}

export const TasksList = ({ setCurrentTask, currenOpenTask }: Props) => {
  const [fetchedData, setFetchedData] = useState(
    [] as SerializedTaskResponse[],
  );
  useEffect(() => {
    (async () => {
      const data = await handleFetchTaskList();
      setFetchedData(data);
    })();
  }, []);
  return (
    <StyledDivContainer margin="5vh 0 0 0" flexDirection="column">
      {fetchedData.map((data) => (
        <SingleTask
          data={data}
          key={data.id}
          setCurrentTask={setCurrentTask}
          currenOpenTask={currenOpenTask}
        />
      ))}
    </StyledDivContainer>
  );
};
