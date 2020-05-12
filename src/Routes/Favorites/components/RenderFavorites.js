import React, { useContext } from 'react'
import { FavoritesContext } from '../../../Contexts/FavoritesContext'

const RenderFavorites = () => {
  const { state = [], dispatch } = useContext(FavoritesContext)

  return state.map((item) => {
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

export default RenderFavorites
