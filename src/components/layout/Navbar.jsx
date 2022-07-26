import { MdCatchingPokemon } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  const navRef = useRef();
  const toggleNav = () => navRef.current.classList.toggle(classes.responsive);

  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Link to='/' className={classes.title}>
            <MdCatchingPokemon className={classes.icon} />
            Pokemon API
          </Link>
        </div>

        <FaBars onClick={toggleNav} className={classes.bars} />

        <div ref={navRef} className={classes.list}>
          <Link to='/' className={classes.item} onClick={toggleNav}>
            Home
          </Link>

          <Link to='/pokemons' className={classes.item} onClick={toggleNav}>
            Pokemon
          </Link>
          <button className={classes.close} onClick={toggleNav}>
            <FaTimes />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
