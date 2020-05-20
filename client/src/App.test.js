import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import pokemonTypes from './components/pokemonTypes';
import PokemonForm from './components/pokemonForm';
import NameSearchResults from './components/nameSearchResults';
import TypeSearchResults from './components/typeSearchResults';

test('Sample Test', () =>{
  expect(true).toBeTruthy();
})

test('renders David in the title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/David/i);
  expect(linkElement).toBeInTheDocument();
});

test('pokemonTypes array contains Dark and Steel', () =>{
  expect(pokemonTypes).toContain('dark');
  expect(pokemonTypes).toContain('steel');
})

test('Each component renders without crashing', () => {
  const div = document.createElement('div');
  let type2;
  let pokemonType1 = 'dragon';
  let nameSearch = {data: {
    height: 2,
    name: 'diglett',
    weight: 8,
    sprites: {
      front_default: '#'
    },
    types: {
      0: {
        type: {
          name: 'ground'
        }
      }
    }
  }};
  let searchType = {data: {
    pokemon: [
      {
        pokemon: {
          name: 'dratini'
        }
      }
    ]
  }};
  ReactDOM.render(<App/>, div);
  ReactDOM.render(<PokemonForm/>, div);
  ReactDOM.render(<NameSearchResults response={nameSearch} type2={type2}/>, div);
  ReactDOM.render(<TypeSearchResults pokemonType1={pokemonType1} response={searchType} typeSearch={pokemonType1}/>, div);
})
