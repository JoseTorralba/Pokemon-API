import { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loading from '../components/layout/Loading';
import PokemonContext from '../context/pokemon/PokemonContext';
import PokemonTypes from '../components/pokemon/PokemonTypes';
import { getPokemon, getPokemonDesc } from '../context/pokemon/PokemonActions';
import classes from './Pokemon.module.css';

const Pokemon = () => {
  const { entries, info, loading, dispatch } = useContext(PokemonContext);
  const [searchedPokemon, setSearchedPokemon] = useState(false);
  const [shiny, setShiny] = useState(false);
  const params = useParams();

  const statName = ['hp', 'attack', 'defense', 'sp.atk', 'sp. def', 'speed'];

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    setSearchedPokemon(true);

    const getPokemonData = async () => {
      const pokemonData = await getPokemon(params.name);

      const pokemonDesc = await getPokemonDesc(pokemonData.species.url);
      dispatch({ type: 'GET_POKEMON_INFO', payload: pokemonData });
      dispatch({ type: 'GET_POKEMON_ENTRY', payload: pokemonDesc });
    };

    getPokemonData();
  }, [dispatch, params.name]);

  const shinyHandler = e => {
    setShiny(e.target.checked);
  };

  const { name, sprites, types, id, weight, height, stats } = info;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          translateY: 100,
        }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 1 * 0.1 }}
        className={classes.pokemon}
      >
        {searchedPokemon && (
          <div className={classes.card}>
            <div className={classes.data}>
              <h2 className={classes.name}>{name}</h2>
              <img
                className={classes.sprite}
                src={!shiny ? sprites.front_default : sprites.front_shiny}
                alt={name}
              />

              <div className={classes.types}>
                <PokemonTypes types={types} />
              </div>

              <div className={classes.info}>
                <p className={classes.dex}>
                  <span className={classes.label}>
                    {('000' + id).slice(-3)}
                  </span>
                  <span className={classes.test}>Dex. #</span>
                </p>

                <p className={classes.dex}>
                  <span className={classes.label}>{weight}kg</span>
                  <span className={classes.test}>Weight</span>
                </p>

                <p className={classes.dex}>
                  <span className={classes.label}>{height}m</span>
                  <span className={classes.test}>Height</span>
                </p>
                <p className={classes.dex}>
                  <span className={classes.label}>
                    <input
                      className={classes.toggle}
                      type='checkbox'
                      onClick={shinyHandler}
                    />
                  </span>
                  <span className='test'>Shiny</span>
                </p>
              </div>
              <div className={classes.description}>{entries}</div>
            </div>

            <div>
              <h2 className={classes.header}>Base Stats</h2>
              <div className={classes.stats}>
                {stats.map((currentStat, i) => {
                  return (
                    <div className={classes.bars} key={i}>
                      <div className={classes.inner}>
                        <div
                          className={classes.fill}
                          style={{
                            height:
                              currentStat.base_stat >= 255
                                ? '100%'
                                : currentStat.base_stat + 'px',
                          }}
                        ></div>
                      </div>

                      <div className={classes.label}>
                        <span className={classes.value}>
                          {currentStat.base_stat}
                        </span>
                        <span className={classes.attribute}>{statName[i]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className={classes.buttons}
      >
        <Link to='/' className={classes.button}>
          Search For a Pokemon
        </Link>

        <Link to='/pokemons' className={classes.button}>
          View All Pokemon
        </Link>
      </motion.div>
    </>
  );
};

export default Pokemon;
