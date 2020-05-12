import React, { useContext } from 'react';
import { FavoritesContext } from '../../Contexts/FavoritesContext'
import styled from 'styled-components'
import List from './styled/List'
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: action => dispatch(action)
})

const mapStateToProps = (state) => ({
  favorites: state
})

const Favorites = ({ favorites, removeFavorite }) => {
  const RenderFavorites = () => {
    return favorites.map((item) => {
      const { name, image } = item

      const removeAction = { 
        type: 'REMOVE_FAVORITE',
        payload: item 
      }

      return (
        <li key={name}>
          <img src={image} alt={name} />
          <span>{name}</span>
          <button onClick={() => removeFavorite(removeAction)}>Remove</button>
        </li>
      )
    })
  }

  return( 
    <>
      <h1>Favorites</h1>
      <List>{RenderFavorites()}</List>
    </> 
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)