import { SerializedTaskResponse } from 'types';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { SingleTaskContainer } from '../Atoms/SingleTaskContainer';
import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { TaskInsideP } from '../Atoms/TaskInsideP';
import { NavBtn } from '../Molecules/Navbtn';
import { handleStartTasKClick } from '../../Utils/onActionHandlers/handleStartTasKClick';
import { NotificationsContext } from '../../ContextFactories/NotificationsContext';
import { DesktopSettingsContext } from '../../ContextFactories/DesktopSettingsContext';

export interface Props {
  data: SerializedTaskResponse;
  setCurrentTask: React.Dispatch<React.SetStateAction<SerializedTaskResponse>>;
  currenOpenTask: SerializedTaskResponse | undefined;
}

export const SingleTask = ({ data, setCurrentTask, currenOpenTask }: Props) => {
  const nav = useNavigate();
  const infoScreen = useContext(NotificationsContext);
  const settings = useContext(DesktopSettingsContext);
  const performData = new Date(data.performanceDay);
  const openTaskId = currenOpenTask?.id;
  return (
    <SingleTaskContainer>
      <StyledDivContainer
        margin="0 0 0 10%"
        height="50%"
        flexDirection="row"
        justifyContent="flex-start"
      >
        <TaskInsideP fontSize="x-large">{data.name}</TaskInsideP>
      </StyledDivContainer>
      <StyledDivContainer
        margin="0"
        width="100%"
        height="50%"
        flexDirection="row"
        justifyContent="flex-start"
      >
        <StyledDivContainer
          margin="0 0 0 10%"
          width="50%"
          justifyContent="flex-start"
        >
          <TaskInsideP>{`${performData.getDate()}.${performData.getMonth()}.${performData.getFullYear()}`}</TaskInsideP>
        </StyledDivContainer>
        <StyledDivContainer width="50%" margin="0 5% 0 0">
          <NavBtn
            enabled={!data.startDate}
            onBtnText={data.id === openTaskId ? 'ACTIVE' : 'START'}
            onClickHandler={() =>
              handleStartTasKClick(
                data,
                nav,
                infoScreen,
                settings,
                setCurrentTask,
              )
            }
          />
        </StyledDivContainer>
      </StyledDivContainer>
    </SingleTaskContainer>
  );
};
