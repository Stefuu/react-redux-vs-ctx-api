import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  border: 1px solid;
  width: 100%;
  height: 200px;
  background-color: lightgray;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  padding: 3px;
  cursor: pointer;
  text-align: center;
  li {
    width: 90px;
    height: 90px;
    background-color: white;
    border: 1px solid;
    padding: 3px;
    margin: 3px;
  }
`

const renderFavorites = (favorites = []) => {
  return (
    favorites.map(({ name, image, id}, index) => {
      return (
        <li key={id}>
          <img src={image} alt={name} />
          <span>{name}</span>
        </li>
      )
    })
  )
}

const EasyFavorites = () => {
  return (
    <>
      <Container>
        <div>
          <span>Easy Favorites:</span>
        </div>
        <List>
          {renderFavorites()}
        </List>
      </Container>
    </>
  )
}

export default EasyFavorites