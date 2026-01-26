import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants.service';
import { useLocation } from '../location/location.context';

const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoadingRestaurants, setIsLoadingRestaurants] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useLocation();

  const value = useMemo(
    () => ({
      restaurants,
      isLoadingRestaurants,
      error,
    }),
    [restaurants, isLoadingRestaurants, error]
  );

  const retrieveRestaurants = loc => {
    setIsLoadingRestaurants(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then(results => {
          setIsLoadingRestaurants(false);
          setRestaurants(results);
        })
        .catch(err => {
          setIsLoadingRestaurants(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={value}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurants = () => {
  const restaurants = useContext(RestaurantsContext);
  if (!restaurants)
    throw new Error('Restaurant context is used outside the provider');

  return restaurants;
};
