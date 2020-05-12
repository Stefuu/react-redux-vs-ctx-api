import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components'
import EasyFavorites from './components/EasyFavorites'
import data from '../../__fixtures__/data'
import { FavoritesContext } from '../../Contexts/Favorites'
import List from './styled/List'

const renderProducts = (products = [], handleClick) => {
  const { dispatch } = useContext(FavoritesContext)

  return products.map((item, index) => {
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
      </ li>
    )
  })
}

export default ({ name }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const apiResult = data // Finge comigo aqui
    setProducts(apiResult) 
  }, [])

  return (
    <>
      <h1>Catalog</h1>
      <List>{renderProducts(products)}</List>
      <EasyFavorites />
    </>
  ) 
}
