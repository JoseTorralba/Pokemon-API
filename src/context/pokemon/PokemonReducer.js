const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case 'GET_POKEMON_INFO':
      return {
        ...state,
        info: action.payload,
        loading: false,
      };

    case 'GET_POKEMON_ENTRY':
      return {
        ...state,
        description: action.payload,
        loading: false,
      };
    case 'GET_POKEMON_LIST':
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
