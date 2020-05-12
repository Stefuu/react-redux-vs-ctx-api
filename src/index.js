import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import Routes from './Routes'
import './style.css'
import FavoritesStore from './Contexts/FavoritesContext'

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Catalog</Link>
          </li>
          <li>
            <Link to='/Favorites'>Favorites</Link>
          </li>
        </ul>
        <FavoritesStore>
          <Routes />
        </FavoritesStore>
      </div>
    </Router>
  )
}

render(<App />, document.getElementById('root'))
