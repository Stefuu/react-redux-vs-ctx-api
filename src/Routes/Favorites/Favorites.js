import React from 'react'
import List from './styled/List'
import RenderFavorites from './components/RenderFavorites'

export default () => {
  return (
    <>
      <h1>Favorites</h1>
      <List>
        <RenderFavorites />
      </List>
    </>
  )
}
