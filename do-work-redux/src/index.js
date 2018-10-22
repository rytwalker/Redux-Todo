// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Components
import App from './App';
import taskReducer from './reducers';
// Styles
import './index.css';

// Create store
const store = createStore(taskReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);