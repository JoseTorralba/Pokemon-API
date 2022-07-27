import axios from 'axios';
const pokemonURL = 'https://pokeapi.co/api/v2';
const pokemon = axios.create({ baseURL: pokemonURL });

// Gets a Single Pokemon's Data
export const getPokemon = async name => {
  const response = await pokemon.get(`/pokemon/${name}`);
  return response.data;
};

// Gets Pokemon Description (Refactor later)
export const getPokemonDesc = async name => {
  const response = await pokemon.get(name);

  const description = response.data.flavor_text_entries.filter(
    entry => entry.language.name === 'en'
  );

  return description[0].flavor_text;
};

// Gets a list of Pokemon
export const getPokemons = async (limit = 20, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('error: ', error);
  }
};

// Loops Through List of Pokemon
export const updatePokemons = async res => {
  const response = Promise.all(
    res.map(async data => {
      const pokeInfo = await pokemon.get(`${data.url}`);
      return pokeInfo.data;
    })
  );
  return response;
};
