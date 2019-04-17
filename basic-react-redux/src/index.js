import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducerOBJ from './allReducers';
import { Provider } from 'react-redux';

const storeObj = createStore(allReducerOBJ);
ReactDOM.render(
    <Provider store={storeObj}>
        <App />
    </Provider>, document.getElementById('root'));

