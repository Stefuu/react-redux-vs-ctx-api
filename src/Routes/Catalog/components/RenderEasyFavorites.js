import React, { useContext } from 'react'
import { FavoritesContext } from '../../../Contexts/FavoritesContext'

const RenderEasyFavorites = () => {
  const { state = [], dispatch } = useContext(FavoritesContext)

  return (
    state.map((item) => {
      const { name, image } = item

      const removeAction = {
        type: 'REMOVE_FAVORITE',
        payload: item
      }

      return (
        <li key={name}>
          <button onClick={() => dispatch(removeAction)}>Remove</button>
          <img src={image} alt={name} width='90' height='90' />
          <span>{name}</span>
        </li>
      )
    })
  )
}

export default RenderEasyFavorites
