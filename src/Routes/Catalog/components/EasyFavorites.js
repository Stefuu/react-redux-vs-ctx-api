import React, { useContext } from 'react'
import Container from './styled/Container'
import List from './styled/List'
import RenderEasyFavorites from './RenderEasyFavorites'

const EasyFavorites = () => {
  return (
    <>
      <Container>
        <div>
          <b>Easy Favorites:</b>
        </div>
        <List>
          <RenderEasyFavorites />
        </List>
      </Container>
    </>
  )
}

export default EasyFavorites