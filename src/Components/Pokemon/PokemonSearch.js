import Button from "../UI/Button";
import { useState } from 'react';
import axios from "axios";
import './PokemonSearch.css';
import ErrorModal from "../UI/ErrorModal";
import Loading from "../UI/Loading";

const PokemonSearch = props => {
   const [enteredPokemon, setEnteredPokemon] = useState('');
   const [error, setError] = useState();
   const [isLoading, setLoading] = useState(false);

   const searchPokemonHandler = async event => {
      try {
         event.preventDefault();
         setLoading(true);

         if (enteredPokemon.trim().length === 0) {
            setLoading(false);
            setError({
               title: 'Invalid Pokemon!',
               message: 'Please enter a valid Pokemon Name or Dex # from 1 - 898'
            })
            return;
         };

         const pokemonValue = enteredPokemon.toLowerCase();

         await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}`)
         .then(response => {
            setLoading(false);

            props.onAddPokemon(response.data); 
            setEnteredPokemon('');
         })

      } catch(err) {
         setLoading(false);
         setError({
            title: 'Pokemon does not exist!',
            message: 'Please enter a valid Pokemon Name or Dex # from 1 - 898'
         })
         return;
      }
   }

   const pokemonChangeHandler = event => setEnteredPokemon(event.target.value);

   const errorHandler = () => setError(null);

   return (
      <>
         {isLoading && <Loading />}
         {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

         <form className="pokemon-search" onSubmit={searchPokemonHandler}>
            <label htmlFor="pokemon">Enter a Pokemon:</label>
            <input
               type="search"
               className="pokemon-search__input" 
               id="pokemon" type="text" 
               value={enteredPokemon} 
               onChange={pokemonChangeHandler} 
               placeholder="Pokemon name..."
               disabled = {isLoading}
            />
            <Button type="submit">Search</Button>
         </form>
      </>
   )
}

export default PokemonSearch;