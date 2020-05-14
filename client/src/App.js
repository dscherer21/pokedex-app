// atflow
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PokemonForm from './components/pokemonForm';

function App() {
  const[pokemonType1, setPokemonType1] = useState('none');
  const[pokemonName, setPokemonName] = useState();
  const[apiModifier, setApiModifier] = useState();
  const [displayResults, setDisplayResults] = useState(
    <h5>
      <p>If you know the name of the Pokemon you are trying to find, type it's name into the 'Pokémon Name' field. You can also search by Pokemon type by using the dropdown menus. Click the 'Search' button once you are ready to search.</p> 
      <p style={{color: 'red'}}>Note: If you are searching by name, please leave the 'Type' fields set to 'None.'</p>
    </h5>
  );

  

  function apiCall(e) {
    console.log('Search Button clicked!');
    console.log('Pokemon Type 1: ' + pokemonType1);
    console.log('Pokemon Name: ' + pokemonName);
    e.preventDefault();

    //setting a 'Searching' message until the api call returns data
    setDisplayResults(
      <h5>Searching...</h5>
    );

    axios.get('https://pokeapi.co/api/v2/' + apiModifier + '')
    .then(function (response) {
      // handle success
      console.log(response.data.pokemon);
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  };

  useEffect(() => {
    if(pokemonType1 !== 'none' && !pokemonName) {
      setApiModifier('type/' + pokemonType1 + '');
    } else if(pokemonType1 === 'none' && pokemonName) {
      setApiModifier('pokemon/' + pokemonName + '');
    }

    
  }, [pokemonName, pokemonType1]);

  return (
    <div className="App" path='/'>
      <div className='pokeball'>
        <h1 className='pokemonFont' style={{fontSize: '65px'}}>David's PokéDex</h1>
      </div>
      <div id='octagon'>
        <PokemonForm
          setPokemonName={setPokemonName}
          setPokemonType1={setPokemonType1}
          apiCall={apiCall}
        />
        {displayResults}
      </div>
    </div>
  );
}

export default App;
