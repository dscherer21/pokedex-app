import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const[pokemonType1, setPokemonType1] = useState();
  const[pokemonType2, setPokemonType2] = useState();
  const[pokemonName, setPokemonName] = useState();
  const [displayResults, setDisplayResults] = useState(
    <h5>
        <p>If you know the name of the Pokemon you are trying to find, type it's name into the 'Pokémon Name' field. You can also search by Pokemon type by using the dropdown menus. Click the 'Search' button once you are ready to search.</p> 
        <p style={{color: 'red'}}>Note: If you are searching by name, please leave the 'Type' fields set to 'None.'</p>
      </h5>
  );
  const apiCall = (e) => {
    console.log('Search Button clicked!');
    console.log('Pokemon Type 1: ' + pokemonType1);
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
        <form className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <label htmlFor='pokemonName' placeholder='Type Pokemon Name Here'>Pokémon Name:</label>
            </div>
            <div className='col-xl-12'>
              <input name='pokemonName'/>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-12'>
              <label htmlFor='type1'>Pokémon Type 1:</label>
            </div>
            <div className='col-xl-12'>
              <select name='type1' id='type1'>
                <option value='none'>None</option>
                <option value='bug'>Bug</option>
                <option value='dark'>Dark</option>
                <option value='dragon'>Dragon</option>
                <option value='electric'>Electric</option>
                <option value='fairy'>Fairy</option>
                <option value='fighting'>Fighting</option>
                <option value='fire'>Fire</option>
                <option value='flying'>Flying</option>
                <option value='ghost'>Ghost</option>
                <option value='grass'>Grass</option>
                <option value='ground'>Ground</option>
                <option value='ice'>Ice</option>
                <option value='normal'>Normal</option>
                <option value='poison'>poison</option>
                <option value='psychic'>Psychic</option>
                <option value='rock'>Rock</option>
                <option value='steel'>Steel</option>
                <option value='water'>Water</option>
              </select>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-12'>
              <label htmlFor='type2'>Pokémon Type 2:</label>
            </div>
            <div className='col-xl-12'>
              <select name='type2'>
                <option value='none'>None</option>
                <option value='bug'>Bug</option>
                <option value='dark'>Dark</option>
                <option value='dragon'>Dragon</option>
                <option value='electric'>Electric</option>
                <option value='fairy'>Fairy</option>
                <option value='fighting'>Fighting</option>
                <option value='fire'>Fire</option>
                <option value='flying'>Flying</option>
                <option value='ghost'>Ghost</option>
                <option value='grass'>Grass</option>
                <option value='ground'>Ground</option>
                <option value='ice'>Ice</option>
                <option value='normal'>Normal</option>
                <option value='poison'>poison</option>
                <option value='psychic'>Psychic</option>
                <option value='rock'>Rock</option>
                <option value='steel'>Steel</option>
                <option value='water'>Water</option>
              </select>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-12'>
              <button className='btn btn-primary' onClick={apiCall}>Search</button>
            </div>
          </div>
        </form>
        {displayResults}
      </div>
    </div>
  );
}

export default App;
