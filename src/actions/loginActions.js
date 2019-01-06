import loginService from '../services/login'
import blogService from '../services/blogs'
import { actionBlogInit } from './blogActions'
import { actionUsersInit  } from './userActions'

export const actionLogin = (credentials) => {
  return async (dispatch) => { 
    try {
      const response = await loginService.login(credentials)
      
      dispatch({
        type: 'LOGIN',
        username: response.username,
        name: response.name,
        token: response.token,
        id: response.id
      })

      blogService.setToken(response.token)

      actionBlogInit()
      actionUsersInit()
      
      window.localStorage.setItem('loggedUser', JSON.stringify(response))


    } catch (exception) {
      //TODO: better handling for a wrong login...
      console.log('bad login', exception)
      dispatch({
        type: 'LOGOUT'
      })
    }


  }
}

export const actionUserFromStorage = (credentials) => {
  return {
    type: 'LOGIN',
    username: credentials.username,
    name: credentials.name,
    token: credentials.token,
    id: credentials.id
  }
}

export const actionLogout = () => {
  return (dispatch) => {
    window.localStorage.removeItem('loggedUser')
    dispatch({type: 'LOGOUT'})
  }
}

export const actionDemoIn = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT' })
    dispatch({ type: 'DEMOIN' })
  }
}
