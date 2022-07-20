import { useContext } from 'react';
import PokemonContext from '../../context/pokemon/PokemonContext';
import PokemonItem from './PokemonItem';
// import classes from './PokemonResults.module.css';

function PokemonResults() {
  const { pokemon, loading } = useContext(PokemonContext);

  if (!loading) {
    return <PokemonItem key={pokemon.id} pokemon={pokemon} />;
  } else {
    return <p>Loading...</p>;
  }
}

export default PokemonResults;
