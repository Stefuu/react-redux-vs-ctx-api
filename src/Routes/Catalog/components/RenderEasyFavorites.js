import React, { useContext } from 'react'
import { FavoritesContext } from '../../../Contexts/FavoritesContext'

const RenderEasyFavorites = () => {
  const [favorites = [], setFavorites] = useContext(FavoritesContext)

  return (
    favorites.map((item) => {
      const { name, image, id } = item

      const removefavorites = () => {
        setFavorites(favorites.filter(favorite => favorite.id !== id))
      }

      return (
        <li key={name}>
          <button onClick={removefavorites}>Remove</button>
          <img src={image} alt={name} width='90' height='90' />
          <span>{name}</span>
        </li>
      )
    })
  )
}

export default RenderEasyFavorites
