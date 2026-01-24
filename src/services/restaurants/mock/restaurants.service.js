import { mocks } from './index';

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

restaurantsRequest()
  .then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
