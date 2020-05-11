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
`

const EasyFavorites = () => {
  return (
    <>
      <Container>
        <div>
          <span>Easy Favorites:</span>
        </div>
        <List>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </List>
      </Container>
    </>
  )
}

export default EasyFavorites