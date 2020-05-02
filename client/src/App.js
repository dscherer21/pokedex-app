import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" path='/'>
      <div className='pokeball'>
        <h1 className='pokemonFont' style={{fontSize: '65px'}}>David's PokeDex</h1>
      </div>
      <div id='octagon'>
        <form className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <label>Pokemon Name:</label>
            </div>
            <div className='col-xl-12'>
              <input/>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-12'>
              <label>Pokemon Type 1:</label>
            </div>
            <div className='col-xl-12'>
              <input/>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-12'>
              <label>Pokemon Type 2:</label>
            </div>
            <div className='col-xl-12'>
              <input/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
