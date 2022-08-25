import React from 'react';
import { StyledDivContainer } from '../Atoms/StyledDivContainer';
import { AnimatedLoadingLogo } from '../Molecules/AnimatedLoadingLogo';

export const LoadAnimation = () => {
  return (
    <StyledDivContainer width="100vw" height="100vh">
      <AnimatedLoadingLogo />
    </StyledDivContainer>
  );
};
