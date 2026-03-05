import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthentication } from '../authentication/authentication.context';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuthentication();

  const add = restaurant => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = restaurant => {
    setFavourites(favourites.filter(fav => fav.placeId !== restaurant.placeId));
  };

  const saveFavourites = async (values, uid) => {
    try {
      const jsonValue = JSON.stringify(values);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadFavourites = async uid => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log('Error loading', e);
    }
  };

  useEffect(
    function () {
      if (user) {
        loadFavourites(user.uid);
      }
    },
    [user]
  );

  useEffect(
    function () {
      if (user) {
        saveFavourites(favourites, user?.uid);
      }
    },
    [favourites, user]
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
