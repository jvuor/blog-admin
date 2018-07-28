import blogService from '../services/blogs'
import userService from '../services/users'

const setToken = (token) => {
  blogService.setToken(token)
  userService.setToken(token)
}

export default setToken