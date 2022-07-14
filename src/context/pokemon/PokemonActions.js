import axios from 'axios';
const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';

const pokemon = axios.create({ baseURL: pokemonURL });

export const searchPokemon = async value => {
  const response = await pokemon.get(value);

  return response.data;
};
