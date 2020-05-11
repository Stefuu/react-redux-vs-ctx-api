import React from 'react';
import styled from 'styled-components'
import EasyFavorites from './components/EasyFavorites'

const renderProducts = (products = []) => {
  return products.map(({ image, name }, index) => (
    <li>
      <img src={image} alt={name} />
    </ li>
  ))
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 3px;
`

export default ({ name }) => (
  <>
    <h1>Catalog</h1>
    <List>
      {renderProducts()}
    </List>
    <EasyFavorites />
  </>
)
