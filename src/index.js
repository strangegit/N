import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {reducer as burgerMenu} from 'redux-burger-menu';
import {actionTypes} from 'redux-localstorage';

import persistState from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

import App from './App.js';

const history = createBrowserHistory();

const initialState = {
  router: {
    location: history.location,
    action: history.action
  },
  items : {
    items: [],
  },
  basket: {
    basket: []
  }
}

const rootReducers = (state = initialState, action) => {
  if (action.type === 'NAVIGATE') {
    return {
      ...state,
      router: {
        location: action.location,
        action: action.action
      }
    }
  }
  else if (action.type === 'SAVE_ITEMS') {
    return {
      ...state,
      items: {
        items: action.items,
      }
    }
  }
  else if (action.type === 'TO_BASKET') {
    return {
      ...state,
      basket: {
        basket: [...new Set(state.basket.basket).add(JSON.stringify(action.item))]
      }
    }
  }
  else if (action.type === 'FROM_BASKET') {
    const newset = new Set(state.basket.basket);
    newset.delete(action.item);
    return {
      ...state,
      basket: {
        basket: [...newset]
      }
    }
  }
  else if (action.type === actionTypes.INIT) {
    const persistedState = action.payload ? action.payload.rooty.basket.basket : [];
    return {...state,
      basket: {
        basket: persistedState
      }
    }
  }
  else {
    return state
  }
}

const reducers = combineReducers({rooty: rootReducers, burgerMenu});
const storage = compose(filter('rooty.basket'))(adapter(window.localStorage));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(persistState(storage, 'nknr_basket'));
const store = createStore(reducers, enhancer);

ReactDOM.render(
  <Provider store={store}><App history={history}/></Provider>,
  document.getElementById('root')
);
