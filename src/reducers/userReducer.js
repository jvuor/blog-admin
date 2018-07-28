const reducer = (store = null, action) => {
  if(action.type === 'USERINIT') {
    return action.data
  }
  if(action.type === 'USERADD') {
    return store.concat(action.data)
  }

  return store
}

export default reducer