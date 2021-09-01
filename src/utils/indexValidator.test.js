import indexValidator from './indexValidator';
import { App } from '../constants';

test('is limits being applied', async () => {
  expect(indexValidator(-1, 10)).toBeFalsy();
  expect(indexValidator(0, 10)).toBeTruthy();
  expect(indexValidator(10, 10)).toBeTruthy();
  expect(indexValidator(11, 10)).toBeFalsy();
  
  // must be false because the index starts at zero
  expect(indexValidator(App.POKEMONS_FETCH_LIMIT)).toBeFalsy();
  
  expect(indexValidator(App.POKEMONS_FETCH_LIMIT - 1)).toBeTruthy();
});