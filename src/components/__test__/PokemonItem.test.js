import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import PokemonItem from '../PokemonItem';

describe('Pokemon Item Testing', () => {
  test('Match Snapshot', () => {
    const pokemon = create(
      <ProviderMock>
        <PokemonItem />
      </ProviderMock>,
    );
    expect(pokemon.toJSON()).toMatchSnapshot();
  });
});
