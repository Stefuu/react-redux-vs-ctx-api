  
import React, { useReducer, createContext } from 'react'
import reducer from './reducer'

export const FavoritesContext = createContext()

const FavoritesStore = ({children}) => {
  const initialState = []
  const [favorites, setFavorites] = useReducer(reducer, initialState)

  return (
      <FavoritesContext.Provider value={{favorites, setFavorites}}>
          {children}
      </FavoritesContext.Provider>
  )
}

export default FavoritesStore