import React from 'react';
import EasyFavorites from './components/EasyFavorites'

const renderProduct = (products) => {
  return products.map(({ image, name }, index) => (
    <li>
      <img src={image} alt={name} />
    </ li>
  ))
}

export default ({ name }) => (
  <>
    <h1>Catalog {name}!</h1>
    <ul>
    <li></li>
    </ul>
    <EasyFavorites />
  </>
)
