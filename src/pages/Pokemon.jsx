import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PokemonContext from '../context/pokemon/PokemonContext';

import { getPokemon, getPokemonDesc } from '../context/pokemon/PokemonActions';
import './Pokemon.css';

function Pokemon() {
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
  console.log(info);

  if (loading) {
    return <p className='load'>Loading...</p>;
  }

  return (
    <div className='pokemon'>
      <div className='test'>
        <Link to='/' className='link'>
          Search For a Pokemon
        </Link>

        <Link to='/pokemons' className='link'>
          View All Pokemon
        </Link>
      </div>
      {searchedPokemon ? (
        <div className='pokemon-card'>
          <div className='pokemon-card__info'>
            <img
              className='pokemon-card__img'
              src={!shiny ? sprites.front_default : sprites.front_shiny}
              alt={name}
            />
            <h2 className='pokemon-card__name'>{name}</h2>
            <div>
              {types.map(curType => (
                <p className={`type ${curType.type.name}`} key={curType.slot}>
                  {curType.type.name}
                </p>
              ))}
            </div>

            <div className='pokemon-card__sub-info'>
              <p className='pokemon-card__dex'>
                <span className='pokemon-card__dex--data'>{id}</span>
                <span className='pokemon-card__dex--text'>Dex. #</span>
              </p>

              <p className='pokemon-card__weight'>
                <span className='pokemon-card__dex--data'>{weight}kg</span>
                <span className='pokemon-card__dex--text'>Weight</span>
              </p>

              <p className='pokemon-card__height'>
                <span className='pokemon-card__dex--data'>{height}m</span>
                <span className='pokemon-card__dex--text'>Height</span>
              </p>
              <p className='pokemon-card__shiny'>
                <span className='pokemon-card__dex--data'>
                  <input
                    className='pokemon-card__toggle'
                    type='checkbox'
                    onClick={shinyHandler}
                  />
                </span>
                <span className='pokemon-card__dex--text'>Shiny</span>
              </p>
            </div>
            <div className='pokemon-card__description'>{entries}</div>
          </div>
          <div>
            <h2 className='stats-header'>Base Stats</h2>
            <div className='stats'>
              {stats.map((currentStat, i) => {
                return (
                  <div className='stat-bar' key={i}>
                    <div className='stat-bar__inner'>
                      <div
                        className='stat-bar__fill'
                        style={{
                          height:
                            currentStat.base_stat >= 255
                              ? '100%'
                              : currentStat.base_stat + 'px',
                        }}
                      ></div>
                    </div>

                    <div className='stat-bar__label'>
                      <span className='stat-bar__label--value'>
                        {currentStat.base_stat}
                      </span>
                      <span className='stat-bar__label--attribute'>
                        {statName[i]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
}

export default Pokemon;
