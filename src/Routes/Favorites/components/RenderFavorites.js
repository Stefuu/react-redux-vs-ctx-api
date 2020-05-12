import React, { useContext } from 'react'
import { FavoritesContext } from '../../../Contexts/FavoritesContext'

const RenderFavorites = () => {
  const [favorites, setFavorites] = useContext(FavoritesContext)

  return favorites.map((item) => {
    const { name, image, id } = item

    const removeFavorite = () => {
      setFavorites(favorites.filter(favorite => favorite.id !== id))
    }

    return (
      <li key={name}>
        <img src={image} alt={name} />
        <span>{name}</span>
        <button onClick={removeFavorite}>Remove</button>
      </li>
    )
  })
}

export default RenderFavorites
