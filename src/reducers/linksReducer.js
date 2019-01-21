const reducer = (store = null, action) => {
  if (action.type === 'LINKINIT') {
    return action.data
  }

  if (action.type === 'LINKNEW') {
    return [action.data, ...store]
  }

  return store
}

export default reducer
