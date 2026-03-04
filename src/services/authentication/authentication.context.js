import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

import { loginService } from './login.service';

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const onLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const u = await loginService(email, password);
      setUser(u);
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      isAuthenticated: user ? true : false,
      user,
      isLoading,
      error,
      onLogin,
    }),
    [user, isLoading, error]
  );

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);
  if (!context)
    throw new Error('Authentication context is used outside the provider');
  return context;
};
