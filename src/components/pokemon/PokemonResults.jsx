import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from '../layout/Loading';
import PokemonItem from './PokemonItem';
import PokemonContext from '../../context/pokemon/PokemonContext';
import classes from './PokemonResults.module.css';

const PokemonResults = () => {
  const { pokemon, loading } = useContext(PokemonContext);

  if (!loading) {
    return (
      <AnimatePresence>
        <motion.div
          className={classes.container}
          initial={{
            opacity: 0,
            translateY: 100,
          }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 1 * 0.1 }}
        >
          <PokemonItem
            key={pokemon.id}
            pokemon={pokemon}
            cname={classes.pokemon}
          />
        </motion.div>
      </AnimatePresence>
    );
  } else {
    return <Loading />;
  }
};

export default PokemonResults;
