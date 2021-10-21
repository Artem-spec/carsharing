import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./i18n";
import allReducers from "./store/reducers";
import App from "./App";
import "./index.css";


const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
