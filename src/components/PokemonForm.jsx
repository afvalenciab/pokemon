import React from 'react';
import searchIcon from '../assets/static/search.svg';
import '../assets/styles/PokemonForm.scss';

const PokemonForm = () => {
  return (
    <form className='pokemon--form'>
      <div className='pokemon--form-options'>
        <figure>
          <img src={searchIcon} alt='search icon' />
        </figure>
        <input
          className='search--input'
          type='text'
          placeholder='Search by Id, Name'
        />
        <div>
          <button className='button more' type='button'>
            More Pokémons
          </button>
          <button className='button delete' type='button'>
            Delete Pokémon
          </button>
        </div>
      </div>
    </form>
  );
};

export default PokemonForm;
