export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        action.payload
      ]
    case 'REMOVE_FAVORITE':
      return state.filter(item => item.id !== action.payload.id)
    default:
      throw new Error('Action não encontrada no reducer')
  }
}
