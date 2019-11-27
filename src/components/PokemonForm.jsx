import React from 'react';
import { connect } from 'react-redux';
import { removeSelectedItems, requestMorePokemons, setSearchingPokemon } from '../actions';
import searchIcon from '../assets/static/search.svg';
import '../assets/styles/PokemonForm.scss';

const PokemonForm = (props) => {
  const { removeSelectedItems, nextPage, requestMorePokemons, setSearchingPokemon } = props;

  const handleDeletePokemons = () => {
    removeSelectedItems();
  };

  const handleLoadMorePokemons = () => {
    if (nextPage) {
      requestMorePokemons(nextPage);
    }
  };

  const handleChangeInput = (event) => {
    setSearchingPokemon(event.target.value);
  };

  return (
    <form className='pokemon--form'>
      <div className='pokemon--form-options'>
        <figure>
          <img src={searchIcon} alt='search icon' />
        </figure>
        <input
          className='search--input'
          type='text'
          placeholder='Search by Name'
          onChange={handleChangeInput}
        />
        <div className='buttons--container'>
          <button className='button more' type='button' onClick={handleLoadMorePokemons}>
            More Pokémons
          </button>
          <button className='button delete' type='button' onClick={handleDeletePokemons}>
            Delete Pokémon
          </button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return ({
    nextPage: state.nextPage,
  });
};

const mapDispatchToProps = {
  removeSelectedItems,
  requestMorePokemons,
  setSearchingPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);
