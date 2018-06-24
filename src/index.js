import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Searchbar from './components/search_bar'


import reducers from './reducers';

const youtubeApi= 'AIzaSyBMQ4UCBb8lRJVjjvRpKlEM3LBJqHdwi-Q'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  
    <Searchbar />
  </Provider>
  , document.querySelector('.container'));
