import { useContext, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PokemonResults from './PokemonResults';
import PokemonContext from '../../context/pokemon/PokemonContext';
import { getPokemon } from '../../context/pokemon/PokemonActions';
import classes from './PokemonSearch.module.css';

function PokemonSearch() {
  const { dispatch } = useContext(PokemonContext);
  const pokemonNameRef = useRef();

  const [searched, setSearched] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING' });

    try {
      const enteredPokemon = pokemonNameRef.current.value.toLowerCase().trim();

      if (enteredPokemon === '') {
        window.alert('enter a pokemon!');
      } else {
        const pokemon = await getPokemon(enteredPokemon);

        setSearched(true);
        dispatch({ type: 'GET_POKEMON', payload: pokemon });

        pokemonNameRef.current.value = '';
      }
    } catch (err) {
      window.alert('Pokemon does not exist!');
      setSearched(false);
      return;
    }
  };

  return (
    <motion.div
      className={classes.container}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
    >
      <div className={classes.box}>
        <form onSubmit={submitHandler} className={classes.form}>
          <h1 className={classes.formTitle}>Search For a Pokemon</h1>
          <p className={classes.text}>
            Enter a Pokemon's name or it's national Pokedex number
          </p>

          <div className={classes.input}>
            <input
              className={classes.value}
              type='text'
              placeholder='Search...'
              ref={pokemonNameRef}
            />
            <button type='submit' className={classes.button}>
              Enter
            </button>
          </div>
        </form>
      </div>
      {searched && <PokemonResults />}
    </motion.div>
  );
}

export default PokemonSearch;
