import blogService from '../services/blogs'
import userService from '../services/users'
import linkService from '../services/links'

const setToken = (token) => {
  blogService.setToken(token)
  userService.setToken(token)
  linkService.setToken(token)
}

export default setToken
