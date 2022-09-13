import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { TopBar } from '../Organism/TopBar';
import { useAuth } from '../../Utils/Hooks/authHook';

export const Desktop = () => {
  const { user } = useAuth();
  const { worker, owner } = user;
  return (
    <StyledDivContainer flexDirection="column">
      <TopBar />
      {worker && owner && <StyledDivContainer height="900vh" />}
    </StyledDivContainer>
  );
};
