import { Endpoints } from "../constants";
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

/**
 * @param {int} limit 
 */
export const getPokemons = async (limit) => {
  const client = new ApolloClient({
    uri: Endpoints.GET_POKEMONS,
    cache: new InMemoryCache()
  });
  
  const response = await client
    .query({
      query: gql`
        query Query {
          pokemons(first: ${limit}) {
            name
          }
        }
      `
    });

  console.log(response);
  //.then(result => console.log(result));
};