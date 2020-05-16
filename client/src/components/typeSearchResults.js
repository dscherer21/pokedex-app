import React from 'react';

function TypeSearchResults(props) {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12'>
                    <h3>{props.pokemonType1.charAt(0).toUpperCase() + props.pokemonType1.slice(1)} Type Pokémon</h3>
                </div>
            </div>
            <div className='row'>
                {props.response.data.pokemon.map((pokemon, index) => (
                    <div className='col-xl-3 typeSearch' key={index}>
                        <button className='btn btn-info' onClick={() => props.typeSearch(pokemon.pokemon.name)}>
                            <h5>{pokemon.pokemon.name.charAt(0).toUpperCase() + pokemon.pokemon.name.slice(1)}</h5>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TypeSearchResults;