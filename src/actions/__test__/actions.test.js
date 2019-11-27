import { setPokemons, setSelectedItems } from '../index';
import pokemonListMock from '../../__mocks__/pokemonListMock';

describe('Actions Testing', () => {
  it('It should create an action to set Pokemons list', () => {
    const payload = pokemonListMock;
    const expected = {
      type: 'SET_POKEMONS',
      payload,
    };
    expect(setPokemons(payload)).toEqual(expected);
  });

  it('It should create an action to set a selected Items', () => {
    const payload = ['bulbasaur'];
    const expected = {
      type: 'SET_SELECTED_ITEMS',
      payload,
    };
    expect(setSelectedItems(payload)).toEqual(expected);
  });
});
