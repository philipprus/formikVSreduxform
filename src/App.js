import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import initStore from "./redux/store";
import { Routes } from './routes/Router';

function App() {
  return (
    <Provider store={initStore()}>

      <Routes/>
    </Provider>
  );
}

export default App;
