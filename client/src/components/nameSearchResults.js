import React from 'react';

function NameSearchResults(props) {
    let response = props.response.data;

    return(
        <div className='row'>
            <div className='col-xl-12'>
                <h1>{response.name.charAt(0).toUpperCase() + response.name.slice(1)}</h1>
            </div>
            <div className='col-xl-12'>
                <img className='spriteImage' src={response.sprites.front_default} alt={'Image of a ' + response.name + '.'}/>
            </div>
            <div className='col-xl-12'>
                <h2>Type: {response.types[0].type.name.charAt(0).toUpperCase() + response.types[0].type.name.slice(1)}{props.type2}</h2>
            </div>
            <div className='col-xl-12'>
                <h2>Average Height: {(response.height*0.3280839895).toFixed(2)} ft</h2>
            </div>
            <div className='col-xl-12'>
                <h2>Average Weight: {(response.weight/4.5359237).toFixed(2)} lbs</h2>
            </div>
        </div>
    );
};

export default NameSearchResults;