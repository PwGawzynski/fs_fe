import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { TopBar } from '../Organism/TopBar';
import { useAuth } from '../../Utils/Hooks/authHook';
import { DesktopMainContainer } from '../Atoms/StyledContainers';

export const Desktop = () => {
  const { user } = useAuth();
  const { worker, owner } = user;
  return (
    <DesktopMainContainer>
      <TopBar />
      {worker && owner && <StyledDivContainer height="900vh" />}
    </DesktopMainContainer>
  );
};
