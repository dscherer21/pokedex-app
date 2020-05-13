// atflow
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PokemonForm from './components/pokemonForm';

function App() {
  const[pokemonType1, setPokemonType1] = useState('none');
  const[pokemonType2, setPokemonType2] = useState('none');
  const[pokemonName, setPokemonName] = useState();
  const [displayResults, setDisplayResults] = useState(
    <h5>
      <p>If you know the name of the Pokemon you are trying to find, type it's name into the 'Pokémon Name' field. You can also search by Pokemon type by using the dropdown menus. Click the 'Search' button once you are ready to search.</p> 
      <p style={{color: 'red'}}>Note: If you are searching by name, please leave the 'Type' fields set to 'None.'</p>
    </h5>
  );
  function apiCall(e) {
    console.log('Search Button clicked!');
    console.log('Pokemon Type 1: ' + pokemonType1);
    console.log('Pokemon Type 2: ' + pokemonType2);
    console.log('Pokemon Name: ' + pokemonName);
    e.preventDefault();
    setDisplayResults(
      <h5>Searching...</h5>
    );
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="App" path='/'>
      <div className='pokeball'>
        <h1 className='pokemonFont' style={{fontSize: '65px'}}>David's PokéDex</h1>
      </div>
      <div id='octagon'>
        <PokemonForm
          setPokemonName={setPokemonName}
          setPokemonType1={setPokemonType1}
          setPokemonType2={setPokemonType2}
          apiCall={apiCall}
        />
        {displayResults}
      </div>
    </div>
  );
}

export default App;
