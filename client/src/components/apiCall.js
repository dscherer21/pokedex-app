import React from 'react';

function apiCall(e) {
    console.log('Search Button clicked!');
    console.log(e.target.value);
    console.log('Pokemon Type 1: ' + e.target.pokemonType1);
    //console.log('Pokemon Type 2: ' + pokemonType2);
    //console.log('Pokemon Name: ' + pokemonName);
    e.preventDefault();
    /*setDisplayResults(
      <h5>Searching...</h5>
    );*/
};

export default apiCall;