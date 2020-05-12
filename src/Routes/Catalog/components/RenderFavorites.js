import React from 'react'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
    removeFavorite: action => dispatch(action)
})

const mapStateToProps = (state) => ({
    favorites: state
})
  
const RenderFavorites = ({ favorites, removeFavorite }) => {
    
    return (
        favorites.map((item) => {
        const { name, image} = item

        const removeAction = {
            type: 'REMOVE_FAVORITE',
            payload: item
        }

        return (
            <li key={name}>
            <button onClick={() => removeFavorite(removeAction)}>Remove</button>
            <img src={image} alt={name} width='90' height='90' />
            <span>{name}</span>
            </li>
        )
        })
    )
}

  export default connect(mapStateToProps, mapDispatchToProps)(RenderFavorites)