import React from 'react';
import { connect } from 'react-redux';
import PokemonItem from './PokemonItem';
import '../assets/styles/PokemonList.scss';

const PokemonList = (props) => {
  const { pokemonList, searchingList } = props;

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
        {searchingList &&
          searchingList.map((item, index) => (
            <PokemonItem key={index} {...item} />
          ))}

        {!searchingList &&
          pokemonList.map((item, index) => (
            <PokemonItem key={index} {...item} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemonList: state.pokemonList,
    searchingList: state.searchingList,
  };
};

export default connect(mapStateToProps, null)(PokemonList);
