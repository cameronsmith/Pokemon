import { useEffect, useState } from "react";
import { getPokemons } from '../services/getPokemons';

/**
 * @param {int} maxFetch
 */
const usePokemons = (maxFetch = 151) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemons = async maxFetch => {
    setIsLoading(true);
    setIsError(false);
    try {
      setPokemonList(await getPokemons(maxFetch));
      setIsLoading(false);
    } catch (error) {
      console.log(`An error occured when trying to fetch pokemons: ${error}`);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => fetchPokemons(maxFetch))();
  }, [maxFetch]);

  return {
    pokemonList, isError, isLoading
  };
};

export default usePokemons;