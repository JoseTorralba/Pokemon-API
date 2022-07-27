import { useContext, useEffect, useState } from 'react';
import PokemonContext from '../context/pokemon/PokemonContext';
import { getPokemons, updatePokemons } from '../context/pokemon/PokemonActions';
import PokemonItem from '../components/pokemon/PokemonItem';
import Loading from '../components/layout/Loading';
import { motion } from 'framer-motion';

import classes from './Pokemons.module.css';

const Pokemon = () => {
  const { pokemons, dispatch, loading } = useContext(PokemonContext);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [prevBtn, setPrevBtn] = useState();
  const [nextBtn, setNextBtn] = useState();

  const pokeOffset = 20;

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const fetchPokemon = async () => {
      const pokemonData = await getPokemons(pokeOffset, pokeOffset * page);
      const pokemonList = await updatePokemons(pokemonData.results);

      setTotalPages(Math.ceil(pokemonData.count / 20));

      setPrevBtn(pokemonData.previous);
      setNextBtn(pokemonData.next);

      dispatch({ type: 'GET_POKEMON_LIST', payload: pokemonList });
    };

    fetchPokemon();
  }, [page, dispatch]);

  const nextPageHandler = async e => {
    e.preventDefault();

    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  const prevPageHandler = async e => {
    e.preventDefault();
    if (page > 0) {
      setPage(page - 1);
    }
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
            transition={{ duration: 0.5, delay: i * 0.03 }}
          >
            <PokemonItem key={poke.id} pokemon={poke} cname={classes.pokemon} />
          </motion.div>
        ))}
      </div>

      <div className={classes.pagination}>
        <button
          onClick={prevPageHandler}
          className={`${classes.prev} ${
            prevBtn === null ? `${classes.disabled}` : ''
          }`}
        >
          Prev
        </button>

        <div className={classes.pages}>
          {page + 1} of {totalPages}
        </div>

        <button
          onClick={nextPageHandler}
          className={`${classes.next} ${
            nextBtn === null ? `${classes.disabled}` : ''
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pokemon;
