import axios from 'axios';
const pokemonURL = 'https://pokeapi.co/api/v2';
const pokemon = axios.create({ baseURL: pokemonURL });

// Gets a Single Pokemon's Data
export const getPokemon = async name => {
  const response = await pokemon.get(`/pokemon/${name}`);
  return response.data;
};

// Gets a list of Pokemon
export const getPokemons = async (test = '/pokemon') => {
  const response = await pokemon.get(test);

  return response.data;
};

// Refactor for getPokemons
export const getPokemonDesc = async name => {
  const response = await pokemon.get(name);

  const description = response.data.flavor_text_entries.filter(
    entry => entry.language.name === 'en'
  );

  return description[0].flavor_text;
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Loops Through List of Pokemons
export const updatePokemons = async url => {
  const response = Promise.all(
    url.map(async data => {
      const pokeInfo = await pokemon.get(`/pokemon/${data.name}`);
      return pokeInfo.data;
    })
  );
  return response;
};
