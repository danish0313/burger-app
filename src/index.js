import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {HashRouter} from 'react-router-dom';
import {createStore , applyMiddleware ,compose } from 'redux'
import {Provider} from "react-redux"
import thunk from 'redux-thunk'
import reducer from './store/reducer'
axios.defaults.baseURL = 'https://burger-app-e2da7.firebaseio.com/';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  : null || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));



ReactDOM.render(<Provider store={store}><HashRouter><App /></HashRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
