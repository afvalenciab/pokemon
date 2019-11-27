
const initialState = {
  pokemonList: [],
  nextPage: undefined,
  selectedItems: [],
  searchingList: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POKEMONS': {
      let result = { ...state };
      if (action.payload.results) {
        const newPokemonList = result.pokemonList.concat(action.payload.results);
        result = {
          ...state,
          nextPage: action.payload.next,
          pokemonList: newPokemonList,
        };
      }
      return result;
    };

    case 'SET_SELECTED_ITEMS': {
      return ({
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      });
    };

    case 'DELETE_SELECTED_ITEM': {
      return ({
        ...state,
        selectedItems: state.selectedItems.filter((item) => item !== action.payload),
      });
    };

    case 'REMOVE_SELECTED_ITEMS': {
      return ({
        ...state,
        pokemonList: state.pokemonList.filter((item) => !state.selectedItems.includes(item.name)),
        selectedItems: [],
      });
    };

    case 'SET_SEARCHING_POKEMON': {
      let nameList = [];
      if (action.payload) {
        nameList = state.pokemonList
          .filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()));
      } else {
        nameList = undefined;
      }

      return {
        ...state,
        searchingList: nameList,
      };
    };

    default:
      return state;
  };
};

export default reducer;
