import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon} from "./actions/pokemon_actions";
import { fetchAllPokemon } from "./util/api_util";
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch 
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});