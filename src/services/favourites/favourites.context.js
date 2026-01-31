import React, { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = restaurant => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = restaurant => {
    setFavourites(favourites.filter(fav => fav.placeId !== restaurant.placeId));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const value = useContext(FavouritesContext);
  if (!value)
    throw new Error(
      'Favourites context is used outside the Favourites Provider'
    );
  return value;
};
