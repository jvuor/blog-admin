const reducer = (store = null, action) => {
  if(action.type === 'BLOGNEW') {
    return [action.data, ...store]
  }
  if(action.type === 'BLOGDELETE') {
    const id = action.id
    const newStore = store.filter(m => m.id !== id)
    return newStore
  }
  if(action.type === 'BLOGINIT') {
    return action.data
  }

  return store
}

export default reducer