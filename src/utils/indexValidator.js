import { App } from '../constants';

const defaultMaxLimit = App.POKEMONS_FETCH_LIMIT;
const defaultMinLimit = 0;

/**
 * @param {int} index 
 * @param {int} maxIndex 
 * @param {int} minIndex 
 * @returns 
 */
const indexValidator = (index, maxIndex = defaultMaxLimit, minIndex = defaultMinLimit) => {
  if (isNaN(index)) {
    return false;
  }

  if (index < minIndex || index > maxIndex) {
    return false;
  }

  return true;
};

export default indexValidator;