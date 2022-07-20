import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import PokemonContext from '../context/pokemon/PokemonContext';
import { getPokemons, updatePokemons } from '../context/pokemon/PokemonActions';

import classes from './Pokemons.module.css';

function Pokemon() {
  const { pokemons, dispatch, loading } = useContext(PokemonContext);
  const [next, setNext] = useState();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getPokemonData = async () => {
      const pokemonData = await getPokemons();
      const pokemonList = await updatePokemons(pokemonData.results);
      setNext(pokemonData.next);

      dispatch({ type: 'GET_POKEMON_LIST', payload: pokemonList });
    };

    getPokemonData();
  }, [dispatch]);

  const nextPageHandler = async e => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING' });

    const pokemonData = await getPokemons(e.target.dataset.url);
    const pokemonList = await updatePokemons(pokemonData.results);

    setNext(pokemonData.next);

    dispatch({ type: 'GET_POKEMON_LIST', payload: pokemonList });
  };

  const prevPageHandler = async e => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING' });

    const pokemonData = await getPokemons(e.target.dataset.url);
    const pokemonList = await updatePokemons(pokemonData.results);

    setNext(pokemonData.previous);

    dispatch({ type: 'GET_POKEMON_LIST', payload: pokemonList });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={classes.grid}>
        {pokemons.map((poke, i) => (
          <div key={i} className={classes.pokemon}>
            <Link to={`${poke.name}`}>
              <img src={poke.sprites.front_default} alt={poke.name} />
              <p>
                #{('000' + poke.id).slice(-3)}: {poke.name}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className={classes.pagination}>
        <button
          onClick={prevPageHandler}
          className={classes.next}
          // className={`${classes.next} ${disabled ? `${classes.disabled}` : ''}`}
        >
          Prev
        </button>

        <button
          onClick={nextPageHandler}
          data-url={next}
          className={classes.next}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pokemon;
