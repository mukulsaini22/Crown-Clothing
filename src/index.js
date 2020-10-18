import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import  { store , persistor }  from "../src/redux/store";
import {  PersistGate  } from "redux-persist/integration/react";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <PersistGate persistor={persistor}>
         <App />
      </PersistGate>
    </Router>
  </Provider>,
  rootElement
);
