import React, { useContext } from 'react'
import { FavoritesContext } from '../../../Contexts/FavoritesContext'

const RenderProducts = ({ products = [] }) => {
  const [favorites, setFavorites] = useContext(FavoritesContext)

  return products.map((item) => {
    const { image, name } = item

    const addToFavorites = () => {
      setFavorites([
        ...favorites,
        item
      ])
    }

    return (
      <li key={name}>
        <img src={image} alt={name} />
        <span>{name}</span>
        <div><button onClick={addToFavorites}>Add</button></div>
      </li>
    )
  })
}

export default RenderProducts
