import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = restaurant => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = restaurant => {
    setFavourites(favourites.filter(fav => fav.placeId !== restaurant.placeId));
  };

  const saveFavourites = async values => {
    try {
      const jsonValue = JSON.stringify(values);
      await AsyncStorage.setItem('@favourites', jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favourites');
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log('Error loading', e);
    }
  };

  useEffect(function () {
    loadFavourites();
  }, []);

  useEffect(
    function () {
      saveFavourites(favourites);
    },
    [favourites]
  );

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
