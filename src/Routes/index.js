import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Catalog from './Catalog'
import Favorites from './Favorites'

const Routes = () => {
  return (
    <Switch>
      <Route component={Favorites} path='/favorites' />
      <Route component={Catalog} path='/' />
    </Switch>
  )
}

export default Routes
