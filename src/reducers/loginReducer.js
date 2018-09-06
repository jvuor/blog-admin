const initialState = {
  demo: false,
  loggedIn: false,
  id: null,
  username: null,
  name: null,
  token: null
}

const reducer = (store = initialState, action) => {
  console.log('store action', action.type)
  if(action.type === 'LOGIN') {
    return {
      demo: false,
      loggedIn: true,
      id: action.id,
      username: action.username,
      name: action.name,
      token: action.token
    }
  }
  if(action.type === 'LOGOUT') {
    return {
      demo: false,
      loggedIn: false,
      id: null,
      username: null,
      name: null,
      token: null
    }
  }
  if(action.type === 'DEMOIN') {
    return({
      ...store,
      demo: true
    })
  }

  return store
}

export default reducer
