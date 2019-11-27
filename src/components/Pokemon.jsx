import React from 'react';
import PokemonForm from './PokemonForm';
import PokemonList from './PokemonList';
import '../assets/styles/Pokemon.scss';

const Pokemon = () => {
  return (
    <section className='pokemon--container'>
      <h2>Pokémons List</h2>
      <PokemonForm />
      <PokemonList />
    </section>
  );
};

export default Pokemon;
