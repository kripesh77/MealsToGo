import React, { createContext, useContext } from 'react';

const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ],
      }}
    >
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
