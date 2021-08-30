import { Endpoints } from "../constants";
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

/**
 * @param {int} maxIndex
 */
export const getPokemons = async maxFetch => {

  const client = new ApolloClient({
    uri: Endpoints.GET_POKEMONS,
    cache: new InMemoryCache()
  });
  
  const response = await client
    .query({
      query: gql`
        query Query {
          pokemons(first: ${maxFetch}) {
            name,
            number,
            image,
            resistant,
            weaknesses,
          }
        }
      `
    });

  return (response.data && response.data.pokemons && response.data.pokemons.length) ? response.data.pokemons : [];
};