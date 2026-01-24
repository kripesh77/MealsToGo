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

const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const value = useMemo(
    () => ({
      restaurants,
      isLoading,
      error,
    }),
    [restaurants, isLoading, error]
  );

  useEffect(function () {
    async function fetchRestaurants() {
      setIsLoading(true);
      try {
        const res = await restaurantsRequest();
        const data = restaurantsTransform(res);
        setRestaurants(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRestaurants();
  }, []);

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
