import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import initialState from './initialState';

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

const ProviderMock = (props) => {
  const { children } = props;
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ProviderMock;
