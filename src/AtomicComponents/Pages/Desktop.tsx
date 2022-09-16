import { TopBar } from '../Organism/TopBar';
import { useAuth } from '../../Utils/Hooks/authHook';
import { DesktopMainContainer } from '../Atoms/StyledContainers';
import { DesktopBg } from '../Atoms/DesktopBg';

export const Desktop = () => {
  const { user } = useAuth();
  const { worker, owner } = user;
  return (
    <DesktopMainContainer>
      <TopBar />
      <DesktopBg />
      {worker && owner}
    </DesktopMainContainer>
  );
};
