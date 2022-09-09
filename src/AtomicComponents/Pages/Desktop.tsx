import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { TopBar } from '../Organism/TopBar';

export const Desktop = () => {
  return (
    <StyledDivContainer flexDirection="column">
      <TopBar />
      <StyledDivContainer height="900vh" />
    </StyledDivContainer>
  );
};
