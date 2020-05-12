import React, { useContext } from 'react';
import { FavoritesContext } from '../../Contexts/Favorites'

export default ({ name }) => {
  const favorites = useContext(FavoritesContext)
  console.log('favorites', favorites)
 return( 
    <>
      <h1>Favorites</h1>
    </> 
  )
}
