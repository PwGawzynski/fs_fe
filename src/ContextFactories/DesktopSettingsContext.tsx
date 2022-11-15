import React, { createContext } from 'react';

export interface DesktopSettingsContextElementsI {
  OperationCenterHeight: string;
  bgPhotoShowed: boolean;
  reloadFlag: boolean;
}

export interface DesktopSettingsContextI {
  settings: DesktopSettingsContextElementsI;
  setDesktopSettings: React.Dispatch<
    React.SetStateAction<DesktopSettingsContextElementsI>
  >;
}

export const DesktopSettingsContext = createContext(
  {} as DesktopSettingsContextI,
);
