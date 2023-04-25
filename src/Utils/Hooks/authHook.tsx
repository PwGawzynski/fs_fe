import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRolesObj } from 'types';
import { useLocalStorage } from './localStoreHook';

interface ContextInterface {
  user: any;
  setLoginInLS: (data: UserRolesObj) => Promise<void>;
  setLogoutILS: () => void;
}

const AuthContext = createContext({} as ContextInterface);

interface Pros {
  children: JSX.Element;
}
export const AuthProvider = ({ children }: Pros) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const setLoginInLS = useCallback(
    async (data: UserRolesObj) => {
      setUser(data);
      navigate('/profile');
    },
    [navigate, setUser],
  );

  // call this function to sign out logged-in user
  const setLogoutLS = useCallback(() => {
    setUser(null);
    navigate('/', { replace: true });
  }, [navigate, setUser]);

  const value = useMemo(
    () => ({
      user,
      setLoginInLS,
      setLogoutILS: setLogoutLS,
    }),
    [setLoginInLS, setLogoutLS, user],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
