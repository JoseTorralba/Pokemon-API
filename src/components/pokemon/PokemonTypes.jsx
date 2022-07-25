import classes from './PokemonTypes.module.css';

const PokemonTypes = ({ types }) => {
  return (
    <>
      {types.map(data => (
        <p
          className={`${classes[`${data.type.name}`]} ${classes.type}`}
          key={data.slot}
        >
          {data.type.name}
        </p>
      ))}
    </>
  );
};

export default PokemonTypes;
