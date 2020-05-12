import React, { useContext } from 'react';
import { FavoritesContext } from '../../Contexts/FavoritesContext'
import styled from 'styled-components'
import List from './styled/List'

export default ({ name }) => {
  const { state = [], dispatch } = useContext(FavoritesContext)

  const RenderFavorites = () => {
    return state.map((item, index) => {
      const { name, image } = item

      const removeAction = { 
        type: 'REMOVE_FAVORITE',
        payload: item 
      }

      return (
        <li key={name}>
          <img src={image} alt={name} />
          <span>{name}</span>
          <button onClick={() => dispatch(removeAction)}>Remove</button>
        </li>
      )
    })
  }

  return( 
    <>
      <h1>Favorites</h1>
      <List>{RenderFavorites()}</List>
    </> 
  )
}
