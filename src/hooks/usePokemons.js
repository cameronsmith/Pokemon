import { useEffect, useState } from "react";
import { getPokemons } from '../services/pokemons';
import limitValidator from "../utils/limitValidator";

/**
 * @param {int} limit 
 */
const usePokemons = (limit) => {
  if (!limitValidator(limit)) {
    throw `${limit} is beyond the limit for this request.`;
  }

  useEffect(() => {
    getPokemons(limit);
  }, [limit]);
};

export default usePokemons;