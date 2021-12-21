import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import CataReducer from './Redux/reducers/catagoryReducer'
import { Provider } from 'react-redux';
import allReducers from './Redux/reducers/index'
import thunk from './Redux/middlewares/thunk'
import { applyMiddleware } from 'redux';

const store= createStore(allReducers,applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
