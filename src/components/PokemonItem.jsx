import React, { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { setSelectedItems, deleteSelectedItem } from '../actions';
import '../assets/styles/PokemonItem.scss';

const PokemonItem = (props) => {
  const { name, url, setSelectedItems, deleteSelectedItem } = props;
  const [pokemon, setPokemon] = useState({
    data: {},
    className: 'pokemon--item',
  });

  useLayoutEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    try {
      const fetchData = async () => {
        const response = await fetch(url, { signal });
        const data = await response.json();
        setPokemon({
          ...pokemon,
          data,
          className: 'pokemon--item',
        });
      };

      fetchData();
      return function cleanup() {
        abortController.abort();
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }, [name]);

  const handleClickItem = () => {
    if (pokemon.className === 'pokemon--item') {
      setPokemon({
        ...pokemon,
        className: `${pokemon.className} active`,
      });
      setSelectedItems(name);
    } else {
      setPokemon({
        ...pokemon,
        className: 'pokemon--item',
      });
      deleteSelectedItem(name);
    }
  };

  return Object.keys(pokemon.data).length > 0 ? (
    <div className={pokemon.className} onClick={handleClickItem}>
      <figure className='poke--figure'>
        <img src={pokemon.data.sprites.front_default} alt={name} />
      </figure>
      <p className='poke--id'>{pokemon.data.id}</p>
      <p className='poke--name'>{name}</p>
      <p className='poke--type'>{pokemon.data.types[0].type.name}</p>
      <p className='poke--weight'>{pokemon.data.weight}</p>
    </div>
  ) : '';
};

const mapDispatchToProps = {
  setSelectedItems,
  deleteSelectedItem,
};

export default connect(null, mapDispatchToProps)(PokemonItem);
