import { useState } from 'react';

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [valueToStore, setValueToStore] = useState(() => {
    try {
      const val = window.localStorage.getItem(key);
      if (val) {
        return JSON.parse(val);
      }
      window.localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (e) {
      return defaultValue;
    }
  });
  const setValue = (newVal: any) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newVal));
    } catch (e) {
      console.log(e);
    }
    setValueToStore(newVal);
  };
  return [valueToStore, setValue];
};
