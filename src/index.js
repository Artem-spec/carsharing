import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import allReducers from './reducers';
import './i18n';
import { Provider } from 'react-redux';

const store = createStore(allReducers);
console.log(store );
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,  
  document.getElementById('root')
);

