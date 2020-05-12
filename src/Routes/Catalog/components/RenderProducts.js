import React, { useContext } from 'react'
import { FavoritesContext } from '../../../Contexts/FavoritesContext'

const RenderProducts = ({ products = [] }) => {
  const { dispatch } = useContext(FavoritesContext)

  return products.map((item) => {
    const { image, name } = item

    const addAction = {
      type: 'ADD_FAVORITE',
      payload: item
    }

    return (
      <li key={name}>
        <img src={image} alt={name} />
        <span>{name}</span>
        <div><button onClick={() => dispatch(addAction)}>Add</button></div>
      </li>
    )
  })
}

export default RenderProducts
