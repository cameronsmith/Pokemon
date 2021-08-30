import { App } from '../constants';

const limitValidator = (limit) => {
  if (!limit) {
    return false;
  }

  if (limit < App.POKEMONS_MIN_LIMIT || limit > App.POKEMONS_MAX_LIMIT) {
    return false;
  }

  return true;
};

export default limitValidator;