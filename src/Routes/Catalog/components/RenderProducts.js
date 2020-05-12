import React from 'react'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
    addFavorite: action => dispatch(action)
})

const RenderProducts = ({ products = [], addFavorite }) => {
    return products.map((item) => {
        const { image, name } = item
        
        const addAction = {
            type: 'ADD_FAVORITE',
            payload: item
        }

        return (
            <li key={name}>
            <img src={image} alt={name} />
            <span>{name}</span>
            <div><button onClick={() => addFavorite(addAction)}>Add</button></div>
            </ li>
        )
    })
}

export default connect(null, mapDispatchToProps)(RenderProducts)