  
import React, { useReducer, createContext } from 'react'
import reducer from './reducer'

// O contexto é responsável por permitir que componentes se inscrevam nele para acessarem seu value
export const FavoritesContext = createContext()

// O componente HOC FavoritesStore é responsável por manter e atualizar o estado do contexto
const FavoritesStore = ({children}) => {
  const initialState = [{
    "id": 13,
    "image": "https://t-static.dafiti.com.br/m3QFkguNpSN_Q6GACRpkvQoU3zY=/fit-in/250x480/dafitistatic-a.akamaihd.net/p/Santa-Lolla-Bolsa-Santa-Lolla-Textura-Caramelo-2004-6689093-1-product.jpg",
    "name": "Bolsa Santa Lolla Textura Caramelo"
  },
  {
    "id": 14,
    "image": "https://t-static.dafiti.com.br/qX08nQBhuZ11RO-WVYFyx1cfnfU=/fit-in/250x480/dafitistatic-a.akamaihd.net/p/DUBUY-Bota-Coturno-Cano-Curto-DUBUY-207FDB-Marrom-8731-1038735-1-product.jpg",
    "name": "Bota Coturno Cano Curto DUBUY 207FDB Marrom"
  }]

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
      <FavoritesContext.Provider value='oooi'>
          {children}
      </FavoritesContext.Provider>
  )
}

export default FavoritesStore