import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './router';
import Home from './home';
import RockPaperScissors from './togloom/rps/rps';
import Pong, { Tennis } from './togloom/pong/pong';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Tennis/> */}
    {/* <Home/> */}
    {/* <RockPaperScissors/> */}
  </React.StrictMode>
);

