// atflow
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PokemonForm from './components/pokemonForm';
import NameSearchResults from './components/nameSearchResults';

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
    //e.preventDefault();

    //setting a 'Searching' message until the api call returns data
    setDisplayResults(
      <h5>Searching...</h5>
    );

    axios.get('https://pokeapi.co/api/v2/' + apiModifier)
    .then(function (response) {
      // handle success
      console.log(response.data.pokemon);
      console.log(response);
      
      if(response.data.pokemon === undefined) {
        let type2;
        if(response.data.types[1]) {
          //if the pokemon has a 2nd type display that type or display nothing if not
          type2 = '/' + response.data.types[1].type.name.charAt(0).toUpperCase() + response.data.types[1].type.name.slice(1);
        } 
        //Display Pokemon Name Search Results
        setDisplayResults(
          <NameSearchResults
            response={response}
            type2={type2}
          />
        );
      } else {
      
        //Display Pokemon Type Search Results
        setDisplayResults(
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <h3>{pokemonType1.charAt(0).toUpperCase() + pokemonType1.slice(1)} Type Pokémon</h3>
              </div>
            </div>
            <div className='row'>
              {response.data.pokemon.map((pokemon, index) => (
                <div className='col-xl-3 typeSearch' key={index}>
                  <button className='btn btn-info' onClick={() => typeSearch(pokemon.pokemon.name)}>
                    <h5>{pokemon.pokemon.name.charAt(0).toUpperCase() + pokemon.pokemon.name.slice(1)}</h5>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  };

  function typeSearch(name) {
    console.log(name);
    setPokemonName(name);
    setPokemonType1('none');
    apiCall();
  }

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
