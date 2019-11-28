# Pokémon View
This project allows you to interact with the Pokemon world.

Check the application in the link below:
[pokemon-view.web.app/](https://pokemon-view.web.app/)

* You can see the Pokémons list with their picture, id, Name, Type and Weight.
* You can load more Pokémons pressing click in "More Pokémons", this option will load 20 more Pokémons.
* You can delete one or more Pokémons, you just need to select the Pokémon with one click then click in the button "Delete Pokémon". If you want to unselect a Pokémon you can click again on the Pokémon.
* You can filter the list and search any Pokémon as long as the Pokémon is in the charged list.
* This app is available on mobile devices.

### Pokémon List
![Pokémon List](https://pokemon-view.s3-us-west-1.amazonaws.com/PokemonPage1.png)

### Search a Pokémon by name in the Pokémon list
![Search Pokémon](https://pokemon-view.s3-us-west-1.amazonaws.com/PokemonPage2.png)

### Delete Pokémons
![Delete Pokémon](https://pokemon-view.s3-us-west-1.amazonaws.com/DeletePokemonPage.png)

### Mobile Version (Responsive Design)
![ReponsiveDesign](https://pokemon-view.s3-us-west-1.amazonaws.com/ResponsivePokemonPage.png)

# Documentation 

### Install

```
npm install
```

If you have any problem during install dependencies you can execute the script below:

```
npm install --unsafe-perm
```

### Execution

```
npm run dev
```

### Build

```
npm run build
```

### Test

```
npm run test
```

## Notes about the project

### How I would improve the project

I would improve the project with the following features:

* Service workers to be available offline.
* Infinite scroll pattern to load Pokémons while we scroll the page.
* Cache for the information.
* Server Side Render to load the page quickly.
* Adding more test cases to ensure the quality in static code.

### Future plans for the project

* Add a detail page to see more information about each Pokémon.
* Add a favorites page to create a custom list of Pokémons.
* Add a login/register feature to save favorite Pokémons.
* Add a CRUD module to create our own Pokémons.

### If I weren't able to finish all the goals, how would I go out executing them?

I would develop the main goals. To decide the main goals, I would evaluate what are the most important features that create value to the customers. It's important to be focused on goals per day and try to complete this schedule with a little bit effort. Another approach is to evaluate what features we can get with an existing library and save time. Also with the team, we can decide to decrease the percent of the test and just make tests for the critical path.

### Explanation of the project

The application was created as a Single Page Application using React, Redux, React-router, Redux-thunk, SASS, HTML, Javascript, jest.

The architecture used was Flux with the Redux implementation. In this architecture, there is a just true source of information that just can be modified through dispatcher(reducers).

![Architecture flux-redux](https://pokemon-view.s3-us-west-1.amazonaws.com/ArchitectureFlux.png)

#### View (React)
The view is the web components that are in the following folders:

'/containers/Home.jsx' is the global page that contains the main components. The Home container was built with this structure because if we need to add another component, we can do that by the easy way putting it below the <Pokemon /> component. This is a declarative way to create components.

* /containers
  - Home.jsx

```javascript
<main>
  <Header />
  <Pokemon />
</main>
```

The folder '/components' has several web components that were built with a specific responsibility. This way each component is reusable.

* /components
  - Header.jsx
  - Pokemon.jsx
  - PokemonForm.jsx
  - PokemonList.jsx
  - PokemonItem.jsx

```javascript
<Header />
<Pokemon>
  <PokemonForm />
  <PokemonList>
    <PokemonItem />
  </PokemonList>
</Pokemon>
```

#### Details about Components
* Each component was created such a 'Functional Component' and I used Hooks(useState, useEffect) to manage its own state.
* In some components, I used Html event(onClick) to dispatch an action. 
* To apply styles to the component, I used Sass, CSS Grid Layout and Flexbox.
* I used @babel to get browser compatible javascript. 

#### Actions

The file 'actions/index.js' has the list of actions that we want to execute and its responsibility is to communicate the action and to give the data.

* /action
  - index.js

In this file, I used a 'redux-thunk' library to use it such a middleware to execute another task and later dispatch the action that changes the state.

```javascript
export const requestMorePokemons = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(setPokemons(data)))
      .catch((error) => console.log(error));
  };
};
```

#### Dispatcher

The file 'reducers/index.js' has the responsibility to complete the action and update the store.

* /reducers
  - index.js

#### Store

The store saves the data and is the only true source of information.

The store was created in the src/index.js.

```javascript
...

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('home-container'),
);
```

The store is updated first time in the 'routes/App.jsx' with the response of 'fetch('https://pokeapi.co/api/v2/pokemon')'.

```javascript
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

  ...
};

...
```

#### Contribute

You can contribute with a pull request.
