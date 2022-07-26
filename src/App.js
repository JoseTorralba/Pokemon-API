import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Pokemons from './pages/Pokemons';
import Pokemon from './pages/Pokemon';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotFound from './pages/NotFound';
import { PokemonProvider } from './context/pokemon/PokemonContext';

import classes from './App.module.css';

function App() {
  return (
    <PokemonProvider>
      <Router>
        <div className={classes.app}>
          <Navbar />

          <main className={classes.main}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pokemons' element={<Pokemons />} />
              <Route path='/pokemons/:name' element={<Pokemon />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </PokemonProvider>
  );
}

export default App;
