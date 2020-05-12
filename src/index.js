import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import Routes from './Routes'
import './style.css'
import rootReducer from './Reducers'

const store = createStore(rootReducer, [])

const App = () => {
  console.log('Versão Redux')
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
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    </Router>
  )
}

render(<App />, document.getElementById('root'))
