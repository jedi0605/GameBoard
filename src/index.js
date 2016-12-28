import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
//import App from './App';
import TopBar from './TopBar';
import Metronome from './Metronome';

import './App.css';
import './Game.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <TopBar />,
  document.getElementById('TopBar')
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('container')
// );

ReactDOM.render(
  <Game />,
  document.getElementById('GameBoard')
);

ReactDOM.render(
  <Metronome />,
  document.getElementById('Metronome')
);


