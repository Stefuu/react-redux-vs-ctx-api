import React, { useContext } from 'react'
import styled from 'styled-components'
import { FavoritesContext } from '../../../Contexts/FavoritesContext'
import Container from './styled/Container'
import List from './styled/List'
import RenderFavorites from './RenderFavorites'

const EasyFavorites = () => {
  return (
    <>
      <Container>
        <div>
          <b>Easy Favorites:</b>
        </div>
        <List>
          <RenderFavorites />
        </List>
      </Container>
    </>
  )
}

export default EasyFavorites