import { useContext, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PokemonResults from './PokemonResults';
import PokemonContext from '../../context/pokemon/PokemonContext';
import AlertContext from '../../context/alert/AlertContext';
import { getPokemon } from '../../context/pokemon/PokemonActions';
import classes from './PokemonSearch.module.css';

const PokemonSearch = () => {
  const pokemonNameRef = useRef();
  const { dispatch } = useContext(PokemonContext);
  const { setAlert } = useContext(AlertContext);

  const [searched, setSearched] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();
    const enteredPokemon = pokemonNameRef.current.value.toLowerCase().trim();

    try {
      if (enteredPokemon.length === 0) {
        setAlert(
          'Please enter a Pokemon Name or Dex # from 1 - 898',
          'Invalid Pokemon!'
        );
      } else {
        setSearched(true);
        dispatch({ type: 'SET_LOADING' });
        const pokemon = await getPokemon(enteredPokemon);
        dispatch({ type: 'GET_POKEMON', payload: pokemon });
        pokemonNameRef.current.value = '';
      }
    } catch (err) {
      setAlert(
        'Please enter a valid Pokemon Name or Dex # from 1 - 898',
        'Pokemon does not exist!'
      );
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
};

export default PokemonSearch;
