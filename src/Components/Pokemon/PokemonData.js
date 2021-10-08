import { useState } from 'react/cjs/react.development';
import './PokemonData.css';
// import axios from 'axios';

const PokemonData = ({ pokemonData }) => {
   const [pokemon] = pokemonData;
   // const [pokemonDescription, setPokemonDescription] = useState();
   const [checkbox, setCheckbox] = useState(false);


   // useEffect(() => {
   //    axios.get(pokemon.speciesURL)
   //    .then(response => {
   //       const pokemonDescription = response.data.flavor_text_entries.filter(entry => entry.language.name === 'en');
   //       setPokemonDescription(pokemonDescription[0].flavor_text);
   //    })

   // });

   const shinyToggleHandler = event => setCheckbox(event.target.checked);

   return (
      <>
         <div className="pokemon-card">
            <div className="pokemon-card__info">
               <img className="pokemon-card__img" src={!checkbox ? pokemon.img : pokemon.shiny} alt={pokemon.name}/>
               <h2 className="pokemon-card__name">{pokemon.name}</h2>
               <div>
                  {pokemon.types.map(curType => <p className={`type ${curType.type.name}`} key={curType.slot}>{curType.type.name}</p>)}
               </div>

               <div className="pokemon-card__sub-info">
                  <p className="pokemon-card__dex">
                     <span className="pokemon-card__dex--data">{pokemon.id}</span>
                     <span className="pokemon-card__dex--text">Dex. #</span>
                  </p>

                  <p className="pokemon-card__weight">
                     <span className="pokemon-card__dex--data">{pokemon.weight}kg</span>
                     <span className="pokemon-card__dex--text">Weight</span>
                  </p>

                  <p className="pokemon-card__height">
                     <span className="pokemon-card__dex--data">{pokemon.height}m</span>
                     <span className="pokemon-card__dex--text">Height</span>
                  </p>
                  <p className="pokemon-card__shiny">
                     <span className="pokemon-card__dex--data">
                        <input className="pokemon-card__toggle" type="checkbox" onClick={shinyToggleHandler}/>
                     </span>
                     <span className="pokemon-card__dex--text">Shiny</span>
                  </p>
               </div>
            </div>
            {/* <div className="pokemon-card__description">
               <p>
                  {pokemonDescription ? pokemonDescription : 'no pokemon'}
               </p>
            </div> */}
         </div>
      </>
   )
}

export default PokemonData;