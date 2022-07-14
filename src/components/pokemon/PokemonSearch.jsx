import { useContext, useRef, useState } from 'react';
import PokemonResults from './PokemonResults';
import PokemonContext from '../../context/pokemon/PokemonContext';
import { searchPokemon } from '../../context/pokemon/PokemonActions';

import pokeball from '../layout/assets/pokeball.png';
import classes from './PokemonSearch.module.css';

function PokemonSearch() {
  const { dispatch } = useContext(PokemonContext);
  const pokemonNameRef = useRef();

  const [searched, setSearched] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();
    const enteredPokemon = pokemonNameRef.current.value.toLowerCase().trim();

    if (enteredPokemon === '') {
      window.alert('enter a pokemon!');
    } else {
      const pokemon = await searchPokemon(enteredPokemon);

      dispatch({ type: 'GET_POKEMON', payload: pokemon });
      setSearched(true);

      pokemonNameRef.current.value = '';
    }
  };

  return (
    <div>
      <div className={classes.grid}>
        <form onSubmit={submitHandler} className={classes.form}>
          <h1 className={classes.formTitle}>Search For a Pokemon</h1>
          <p className={classes.text}>
            Enter a Pokemon's name or national Pokedex number to get it's
            information!
          </p>
          <p className={classes.text}>
            You can also click on the pokeball for a random Pokemon!
          </p>

          <div className={classes.container}>
            <input
              className={classes.input}
              type='text'
              placeholder='Enter a Pokemon'
              ref={pokemonNameRef}
            />
            <button type='submit' className={classes.button}>
              Search
            </button>
          </div>
        </form>
        <div className={classes.test}>
          {!searched ? (
            <img
              className={classes.sprite}
              src={pokeball}
              alt='Pokeball Sprite'
            />
          ) : (
            <PokemonResults />
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonSearch;
