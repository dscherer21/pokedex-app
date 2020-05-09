import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import pokemonTypes from './components/pokemonTypes';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Sample Test', () =>{
  expect(true).toBeTruthy();
})

test('pokemonTypes array contains Dark and Steel', () =>{
  expect(pokemonTypes).toContain('dark');
  expect(pokemonTypes).toContain('steel');
})
