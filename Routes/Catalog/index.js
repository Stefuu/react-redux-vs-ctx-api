import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import EasyFavorites from './components/EasyFavorites'
import data from '../../__fixtures__/data'

const List = styled.ul`
  list-style: none;
  margin: 0 0 300px 0;
  padding: 3px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  justify-content: center;
  li {
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 33%;
    text-align: center;
    img {
      width: 90px;
    }
    span {
      max-width: 90px; 
    }
    :hover {
      opacity: 0.8;

    }
  }
`

const renderProducts = (products = [], handleClick) => {
  return products.map(({ image, name }, index) => (
    <li onClick={handleClick}>
      <img src={image} alt={name} />
      <span>{name}</span>
    </ li>
  ))
}

export default ({ name }) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const apiResult = data // Finge comigo aqui
    setProducts(apiResult) 
  }, [])

  const handleClick = () => {
    
  }

  return (
    <>
      <h1>Catalog</h1>
      <List>
        {renderProducts(products,)}
      </List>
      <EasyFavorites />
    </>
  ) 
}
