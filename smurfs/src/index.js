
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'; /* You need some sort of reducer */ 

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, composeEnhancers (
//   applyMiddleware(/* be sure to throw in the proper middlewares here*/thunk, logger))
// );

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)  /* be sure to throw in the proper middlewares here*/
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
