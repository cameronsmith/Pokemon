import { App } from '../constants';

const indexValidator = (index, maxIndex = App.POKEMONS_MAX_INDEX) => {
  if (isNaN(index)) {
    return false;
  }

  if (index < App.POKEMONS_MIN_INDEX || index > maxIndex) {
    return false;
  }

  return true;
};

export default indexValidator;