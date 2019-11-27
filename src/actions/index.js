/* eslint-disable import/prefer-default-export */

export const setPokemons = (payload) => {
  return ({
    type: 'SET_POKEMONS',
    payload,
  });
};

export const setSelectedItems = (payload) => {
  return ({
    type: 'SET_SELECTED_ITEMS',
    payload,
  });
};

export const deleteSelectedItem = (payload) => {
  return ({
    type: 'DELETE_SELECTED_ITEM',
    payload,
  });
};

export const removeSelectedItems = (payload) => {
  return ({
    type: 'REMOVE_SELECTED_ITEMS',
    payload,
  });
};

export const loadMorePokemons = (payload) => {
  return ({
    type: 'LOAD_MORE_POKEMONS',
    payload,
  });
};

export const requestMorePokemons = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(setPokemons(data)))
      .catch((error) => console.log(error));
  };
};

export const setSearchingPokemon = (payload) => {
  return {
    type: 'SET_SEARCHING_POKEMON',
    payload,
  };
};
