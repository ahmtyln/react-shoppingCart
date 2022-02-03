import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from "./components/context/Context";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);


