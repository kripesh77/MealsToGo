import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';

import { loginService } from './login.service';
import { registerService } from './register.service';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, usr => {
      if (usr) {
        setUser(usr);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const onLogin = useCallback(async (email, password) => {
    setIsLoading(true);
    try {
      const u = await loginService(email, password);
      setUser(u);
    } catch (e) {
      switch (e.message) {
        case 'Firebase: Error (auth/invalid-email).':
          setError('Please provide valid email address');
          break;

        case 'Firebase: Error (auth/invalid-credential).':
          setError('Invalid credentials');
          break;

        default:
          setError('Something went very wrong!');
          break;
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const onRegister = useCallback(async (email, password) => {
    setIsLoading(true);
    try {
      const u = await registerService(email, password);
      setUser(u);
    } catch (e) {
      switch (e.message) {
        case 'Firebase: Error (auth/invalid-email).':
          setError('Please provide valid email address');
          break;

        case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
          setError('Password should be 6 characters long');
          break;

        case 'Firebase: Error (auth/email-already-in-use).':
          setError('Email already exists!');
          break;

        default:
          setError('Something went very wrong!');
          break;
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const onLogout = useCallback(async () => {
    setUser();
    getAuth().signOut();
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated: user ? true : false,
      user,
      isLoadingAuth: isLoading,
      error,
      setError,
      onLogin,
      onRegister,
      onLogout,
    }),
    [user, isLoading, error, onLogin, onRegister, onLogout]
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
