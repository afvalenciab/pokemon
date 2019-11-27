import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { setPokemons } from '../actions';
import Home from '../containers/Home';

const App = (props) => {
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        props.setPokemons(data);
      };

      fetchData();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  setPokemons,
};

export default connect(null, mapDispatchToProps)(App);
