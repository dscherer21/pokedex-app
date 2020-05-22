import React from 'react';
import pokemonTypes from './pokemonTypes';

function PokemonForm(props) {

  function onFormSubmit(e) {
    e.preventDefault();
    //document.getElementById('pokemonName').reset();
    //document.getElementById('type1').reset();
  }
    
  return(
    <form className='container' onSubmit={onFormSubmit}>

      <div className='row'>
        <div className='col-xl-12'>
          <label htmlFor='pokemonName'>
            <h4>Pokémon Name:</h4>
          </label>
        </div>
        <div className='col-xl-12'>
          <input id='pokemonName' name='pokemonName' placeholder='Type Name Here' onChange={(e) => props.setPokemonName(e.target.value.toLowerCase())}/>
        </div>
      </div>

      <div className='row'>
        <div className='col-xl-12'>
          <label htmlFor='type1'>
            <h4>Pokémon Type:</h4>
          </label>
        </div>
        <div className='col-xl-12'>
          <select name='type1' id='type1' onChange={(e) => props.setPokemonType1(e.target.value)}>
            {pokemonTypes.map((types, index) => (
              <option value={types} key={index}>{types}</option>
            ))}
          </select>
        </div>
      </div>

      <div className='row'>
        <div className='col-xl-12'>
          <button id='searchButton' className='btn btn-primary' onClick={props.apiCall}>Search</button>
        </div>
      </div>

    </form>
  );
};

export default PokemonForm;