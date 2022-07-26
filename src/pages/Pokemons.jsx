import { useContext, useEffect, useState } from 'react';
import PokemonContext from '../context/pokemon/PokemonContext';
import { getPokemons, updatePokemons } from '../context/pokemon/PokemonActions';
import PokemonItem from '../components/pokemon/PokemonItem';
import Loading from '../components/layout/Loading';
import { motion } from 'framer-motion';

import classes from './Pokemons.module.css';

const Pokemon = () => {
  const { pokemons, dispatch, loading } = useContext(PokemonContext);
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  const [disable, setDisable] = useState('');

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getPokemonData = async () => {
      const pokemonData = await getPokemons();
      const pokemonList = await updatePokemons(pokemonData.results);
      setNext(pokemonData.next);

      setDisable(pokemonData.previous);

      dispatch({ type: 'GET_POKEMON_LIST', payload: pokemonList });
    };

    getPokemonData();
  }, [dispatch]);

  const nextPageHandler = async e => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING' });

    const pokemonData = await getPokemons(e.target.dataset.url);
    const pokemonList = await updatePokemons(pokemonData.results);

    // Checks if previous contains null to remove disable class on button
    setDisable(pokemonData.previous);

    setNext(pokemonData.next);
    setPrev(pokemonData.previous);

    dispatch({ type: 'GET_POKEMON_LIST', payload: pokemonList });
  };

  const prevPageHandler = async e => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING' });

    const pokemonData = await getPokemons(e.target.dataset.url);
    const pokemonList = await updatePokemons(pokemonData.results);

    if (pokemonData.previous === null) {
      setDisable(null);
    }

    setNext(pokemonData.next);
    setPrev(pokemonData.previous);

    dispatch({ type: 'GET_POKEMON_LIST', payload: pokemonList });
  };

  if (loading) return <Loading />;

  return (
    <>
      <div className={classes.grid}>
        {pokemons.map((poke, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              translateY: 50,
            }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <PokemonItem key={poke.id} pokemon={poke} cname={classes.pokemon} />
          </motion.div>
        ))}
      </div>

      <div className={classes.pagination}>
        <button
          onClick={prevPageHandler}
          data-url={prev}
          className={`${classes.prev} ${
            disable === null ? `${classes.disabled}` : ''
          }`}
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
};

export default Pokemon;
