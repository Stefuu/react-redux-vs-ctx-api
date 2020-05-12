
import React, { useReducer, createContext } from 'react'
import reducer from './reducer'

// O contexto é responsável por permitir que componentes se inscrevam nele para acessarem seu value
export const FavoritesContext = createContext()

// O componente HOC FavoritesStore é responsável por manter e atualizar o estado do contexto
const FavoritesStore = ({ children }) => {
  const initialState = []

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesStore
