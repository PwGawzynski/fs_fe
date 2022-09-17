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
  return (
    <DesktopMainContainer>
      <TopBar />
      <DesktopBg />
      {worker && owner}
      <OperationCenter>
        <Statistics />
        <Control />
      </OperationCenter>
    </DesktopMainContainer>
  );
};
