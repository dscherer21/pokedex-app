import React from 'react';
import pokemonTypes from './pokemonTypes';

function PokemonForm(props) {
    
    return(
        <form className='container'>

          <div className='row'>
            <div className='col-xl-12'>
              <label htmlFor='pokemonName' placeholder='Type Pokemon Name Here'>Pokémon Name:</label>
            </div>
            <div className='col-xl-12'>
              <input name='pokemonName' onChange={(e) => props.setPokemonName(e.target.value)}/>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-12'>
              <label htmlFor='type1'>Pokémon Type 1:</label>
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
              <label htmlFor='type2'>Pokémon Type 2:</label>
            </div>
            <div className='col-xl-12'>
              <select name='type2' onChange={(e) => props.setPokemonType2(e.target.value)}>
                {pokemonTypes.map((types, index) => (
                  <option value={types} key={index}>{types}</option>
                ))}
              </select>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-12'>
              <button className='btn btn-primary' onClick={props.apiCall}>Search</button>
            </div>
          </div>
          
        </form>
    );
};

export default PokemonForm;