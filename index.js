import React, { Component } from 'react';
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Routes from './Routes';
import './style.css';

const App = () => {
    return  (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Catalog</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
        </ul>

        <Routes />
      </div>
    </Router>
  );
}

render(<App />, document.getElementById('root'));
