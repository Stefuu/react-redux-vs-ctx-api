import React, { useState, useEffect, useContext } from 'react';
import EasyFavorites from './components/EasyFavorites'
import data from '../../__fixtures__/data'
import List from './styled/List'
import RenderProducts from './components/RenderProducts'

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
        <RenderProducts products={products} />
      </List>
      <EasyFavorites />
    </>
  ) 
}
