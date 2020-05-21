import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import renderer from 'react-test-renderer';
import App from './App';
import pokemonTypes from './components/pokemonTypes';
import PokemonForm from './components/pokemonForm';
import NameSearchResults from './components/nameSearchResults';
import TypeSearchResults from './components/typeSearchResults';

//Configuring Enzyme
configure({ adapter: new Adapter() });

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

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

test('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
});

test('PokemonForm renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PokemonForm/>, div);
});

test('NameSearchResults renders without crashing', () => {
  const div = document.createElement('div');
  let type2;
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
  ReactDOM.render(
    <NameSearchResults 
      response={nameSearch} 
      type2={type2}
    />, div
  );
});

test('PokemonForm renders without crashing', () => {
  const div = document.createElement('div');
  let pokemonType1 = 'dragon';
  let searchType = {data: {
    pokemon: [
      {
        pokemon: {
          name: 'dratini'
        }
      }
    ]
  }};
  ReactDOM.render(
    <TypeSearchResults 
      pokemonType1={pokemonType1} 
      response={searchType} 
      typeSearch={pokemonType1}
    />, div
  );
});

test('Search Button registers click', () => {
  const mockSubmit = jest.fn();
  const wrapper = shallow(<PokemonForm onSubmit={mockSubmit}/>);
  wrapper.find('#searchButton').simulate('click');
  expect(mockSubmit).not.toHaveBeenCalled();
});