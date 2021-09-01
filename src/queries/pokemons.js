import { gql } from "@apollo/client";

const GET_POKEMON_QUERY = gql`
query Query($fetchLimit: Int!) {
  pokemons(first:$fetchLimit) {
    name,
    number,
    image,
    resistant,
    weaknesses,
    attacks {
      fast {
        name,
        type,
        damage
      },
      special {
        name,
        type,
        damage
      }
    }
  }
}`;

export default GET_POKEMON_QUERY;