import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import EasyFavorites from './components/EasyFavorites'
import data from '../__fixtures__/data.json'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 3px;
`

const renderProducts = (products = []) => {
  return products.map(({ image, name }, index) => (
    <li>
      <img src={image} alt={name} />
    </ li>
  ))
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
    <List>
      {renderProducts()}
    </List>
    a
    <EasyFavorites />
  </>
    ) 
}
