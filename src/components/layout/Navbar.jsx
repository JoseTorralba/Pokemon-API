import { MdCatchingPokemon } from 'react-icons/md';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';
function Navbar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <div className={classes.title}>
          <MdCatchingPokemon className={classes.icon} />
          <Link to='/'>Pokemon API</Link>
        </div>

        <div>
          <div className={classes.links}>
            <Link to='/'>Home</Link>
            <Link to='/pokemon'>Pokemon</Link>
            <Link to='/about'>About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
