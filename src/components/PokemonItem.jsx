import React from 'react';
import '../assets/styles/PokemonItem.scss';

const PokemonItem = () => {
  return (
    <div className='pokemon--item'>
      <figure className='poke--figure'>
        <img src='' alt='pikachu' />
      </figure>
      <p className='poke--id'>25</p>
      <p className='poke--name'>Pikachu</p>
      <p className='poke--type'>Electric</p>
      <p className='poke--weight'>60</p>
    </div>
  );
};

export default PokemonItem;
