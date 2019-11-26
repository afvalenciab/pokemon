import React from 'react';
import PokemonItem from './PokemonItem';
import '../assets/styles/PokemonList.scss';

const PokemonList = () => {
  return (
    <div className='pokemon--list'>
      <div className='pokemon--list-title'>
        <p>Picture</p>
        <p>Id</p>
        <p>Name</p>
        <p>Type</p>
        <p>Weight</p>
      </div>
      <div className='pokemon--list-content'>
        <PokemonItem />
        <PokemonItem />
      </div>
    </div>
  );
};

export default PokemonList;
