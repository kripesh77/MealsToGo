import { mocks } from './index';
import camelize from 'camelize'; // read docs about camelize

// using mocks and promisifying them just to mimic the google maps api call.
export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('Not found');
    }
    resolve(mock);
  });
};

const restaurantsTransform = ({ results = [] }) => {
  // we're doing this because we don't get isClosedTemporarily and isOpenNow property from the api
  // that we need in our restaurant card component.
  // so, we're deriving those properties based on what api is returning
  // why we're doing this?
  // because google maps api returns the data in these format, so to compensate it, we're transforming our data. Simple!
  const mappedResults = results.map(restaurant => {
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      isOpenNow:
        restaurant.opening_hours && restaurant.opening_hours.open_now
          ? true
          : false,
    };
  });

  const newResult = camelize(mappedResults);
  return newResult;
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then(result => {
    result.map(restaurant => {
      console.log(restaurant.isOpenNow, restaurant.isClosedTemporarily);
    });
  })
  .catch(err => console.log(err));
