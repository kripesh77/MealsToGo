import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo,
} from 'react';
import { locationRequest, locationTransform } from './location.service';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState('san francisco');

  const onSearch = useCallback(searchKeyword => {
    setIsLoadingLocation(true);
    setKeyword(searchKeyword);
    if (!searchKeyword.length) return;
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setIsLoadingLocation(false);
        setLocation(result);
      })
      .catch(err => {
        setIsLoadingLocation(false);
        setError(err);
      });
  }, []);

  const value = useMemo(
    () => ({ isLoadingLocation, error, location, search: onSearch, keyword }),
    [isLoadingLocation, error, location, keyword, onSearch]
  );

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const location = useContext(LocationContext);
  if (!location)
    throw new Error(
      'Location context value is used outside of the location context provider'
    );

  return location;
};
