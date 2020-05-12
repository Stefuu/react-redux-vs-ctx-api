  
import React, { useState, createContext } from 'react'

// O contexto é responsável por permitir que componentes se inscrevam nele para acessarem seu value
export const FavoritesContext = createContext()

// O componente HOC FavoritesStore é responsável por manter e atualizar o estado do contexto
const FavoritesStore = ({children}) => {
  const initialState = []

  const [favorites, setFavorites] = useState(initialState)

  return (
      <FavoritesContext.Provider value={[favorites, setFavorites]}>
          {children}
      </FavoritesContext.Provider>
  )
}

export default FavoritesStore