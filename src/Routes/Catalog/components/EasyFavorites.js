import React, { useContext } from 'react'
import styled from 'styled-components'
import { FavoritesContext } from '../../../Contexts/FavoritesContext'
import Container from './styled/Container'
import List from './styled/List'

const RenderFavorites = () => {
  const { state = [], dispatch } = useContext(FavoritesContext)

  return (
    state.map((item, index) => {
      const { name, image} = item

      const removeAction = {
        type: 'REMOVE_FAVORITE',
        payload: item
      }

      return (
        <li key={name}>
          <button onClick={() => dispatch(removeAction)}>Remove</button>
          <img src={image} alt={name} width='90' height='90' />
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
          <b>Easy Favorites:</b>
        </div>
        <List>
          {RenderFavorites()}
        </List>
      </Container>
    </>
  )
}

export default EasyFavorites