import { Link } from 'react-router-dom';
import PokemonTypes from './PokemonTypes';
import classes from './PokemonItem.module.css';

const PokemonItem = ({ pokemon, cname }) => {
  const { name, id, sprites, types } = pokemon;

  return (
    <Link className={`${classes.pokemon} ${cname}`} to={`/pokemons/${name}`}>
      <div className={classes.pokeID}>
        <p>#{('000' + id).slice(-3)}</p>
      </div>
      <img className={classes.sprite} src={sprites.front_default} alt={name} />

      <div className={classes.types}>
        <PokemonTypes types={types} />
      </div>

      <p className={classes.button}>{name}</p>
    </Link>
  );
};

export default PokemonItem;
