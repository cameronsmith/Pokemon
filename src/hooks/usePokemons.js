import { useEffect, useState } from "react";
import { getPokemons } from '../services/pokemons';

/**
 * @param {int} limit 
 */
const usePokemons = limit => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemons = async limit => {
    setIsLoading(true);
    setIsError(false);
    try {
      setPokemonList(await getPokemons(limit));
      setIsLoading(false);
    } catch (error) {
      console.log(`An error occured when trying to fetch pokemons: ${error}`);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => fetchPokemons(limit))();
  }, [limit]);

  return {
    pokemonList, isError, isLoading
  };
};

export default usePokemons;