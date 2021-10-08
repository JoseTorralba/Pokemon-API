import './App.css';
import { useState } from 'react';
import PokemonSearch from './Components/Pokemon/PokemonSearch';
import PokemonData from './Components/Pokemon/PokemonData';
import Stats from './Components/Stats/Stats';
import Pokemon from './Components/Pokemon/Pokemon';

const App = () => {
   const [pokemonsList, setPokemonsList] = useState([])
   const [searchedPokemon, setSearchedPokemon] = useState(false);

   const addPokemonHandler = pokemon => {
      setPokemonsList(() => {
         setSearchedPokemon(true)
         return (
            [{
               name: pokemon.name,
               id: pokemon.id,
               types: pokemon.types,
               ability: pokemon.abilities,
               img: pokemon.sprites.front_default,
               shiny: pokemon.sprites.front_shiny,
               stats: pokemon.stats,
               height: pokemon.height,
               weight: pokemon.weight,
               speciesURL: pokemon.species.url
            }]
         );
      });
   };

   return(
      <div className="app">
         <header className="header">
            <div className="header__content">
               <h1 className="primary-heading">Pokemon API</h1>
               <PokemonSearch onAddPokemon={addPokemonHandler} />
            </div>
         </header>

         {searchedPokemon ? 
            <section>
               <Pokemon>
                  <PokemonData pokemonData={pokemonsList} /> 
                  <Stats pokemonStats={pokemonsList} />
               </Pokemon>
            </section>
            : 
            <div className="info">
               <p>Search for a pokemon by it's name or national pokedex number above and you'll get information on the pokemon!</p>
            </div>
         }
      </div>
   )
};

export default App;