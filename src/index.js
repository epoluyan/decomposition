import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './components/const/data'

ReactDOM.render(
  <App {...data}/>,
  document.getElementById('root')
);