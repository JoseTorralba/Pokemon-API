import { Link } from 'react-router-dom';
import classes from './PokemonItem.module.css';

function PokemonItem({ pokemon }) {
  return (
    <div className={classes.pokemon}>
      <img
        className={classes.sprite}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <p className={classes.name}>{pokemon.name}</p>

      {pokemon.types.map(curType => (
        <p
          className={`${classes[`${curType.type.name}`]} ${classes.type}`}
          key={curType.slot}
        >
          {curType.type.name}
        </p>
      ))}

      {/* Takes User to actual pokemon page containing all the info/data */}
      <Link to={`/pokemon/${pokemon.name}`}>View Pokemon</Link>
    </div>
  );
}

export default PokemonItem;
