import { Link } from 'react-router-dom';
import classes from './PokemonItem.module.css';

function PokemonItem({ pokemon, classTest }) {
  const { name, id } = pokemon;

  return (
    <div className={`${classes.pokemon} ${classTest}`}>
      <img
        className={classes.sprite}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <p className={classes.name}>{pokemon.name}</p>

      <div className={classes.types}>
        {pokemon.types.map(curType => (
          <p
            className={`${classes[`${curType.type.name}`]} ${classes.type}`}
            key={curType.slot}
          >
            {curType.type.name}
          </p>
        ))}
      </div>

      <Link className={classes.button} to={`/pokemons/${name}`}>
        View Pokemon
      </Link>
    </div>
  );
}

export default PokemonItem;
