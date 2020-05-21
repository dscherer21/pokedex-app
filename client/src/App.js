// atflow
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PokemonForm from './components/pokemonForm';
import NameSearchResults from './components/nameSearchResults';
import TypeSearchResults from './components/typeSearchResults';

function App() {
  const[pokemonType1, setPokemonType1] = useState('none');
  const[pokemonName, setPokemonName] = useState();
  const[apiModifier, setApiModifier] = useState();
  const [displayResults, setDisplayResults] = useState(
    <h5>
      <p>If you know the name of the Pokemon you are trying to find, type it's name into the 'Pokémon Name' field. You can also search by Pokémon type by using the dropdown menu. Click the 'Search' button once you are ready to search.</p> 
      <p style={{color: 'red'}}>Note: If you are searching by name, please leave the 'Type' field set to 'None.'</p>
    </h5>
  );

  

  function apiCall() {
    //setting a 'Searching' message until the api call returns data
    setDisplayResults(
      <h5>Searching...</h5>
    );

    axios.get('https://pokeapi.co/api/v2/' + apiModifier)
    .then(function (response) {
      console.log(response);
      // handle success
      if(response.data.pokemon === undefined) {
        let type2;
        if(response.data.types[1]) {
          //if the pokemon has a 2nd type display that type or display nothing if not
          //most of the strings are recieved in lowercase, so this capitalizes the first letter of each name
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
          <TypeSearchResults
            pokemonType1={pokemonType1}
            response={response}
            typeSearch={typeSearch}  
          />
        );
      }
    })
    .catch(function (error) {
      // handle error
      setDisplayResults(
        <h5>We're sorry! We could not find a Pokémon by that name! Please check the spelling of the name or try a Pokémon type search.</h5>
      );
      console.log(error);
    })
  };

  function typeSearch(name) {
    //setting a 'Searching' message until the api call returns data
    setDisplayResults(
      <h5>Searching...</h5>
    );
    axios.get('https://pokeapi.co/api/v2/pokemon/' + name)
    .then(function (response) {
      console.log(response);
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
      )
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  useEffect(() => {
    if(pokemonType1 !== 'none' && !pokemonName) {
      //if pokemonType is not none and pokemonName has no value, modify apicall to search for pokemonTYpe 
      setApiModifier('type/' + pokemonType1);
    } else if(pokemonType1 === 'none' && pokemonName) {
      //if pokemonType is none and pokemonName is not undefined, modify apicall to search for pokemonName
      setApiModifier('pokemon/' + pokemonName);
    }
  }, [pokemonName, pokemonType1]);

  return (
    <div className="App" path='/'>
      <div className='pokeball'>
        <a href='/'>
          <h1 className='pokemonFont'>David's PokéDex</h1>
        </a>
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
