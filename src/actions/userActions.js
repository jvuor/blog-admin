import userService from '../services/users'

export const actionUsersInit = () => {
  return async (dispatch) => {
    const data = await userService.getAll()
    dispatch({
      type: 'USERINIT',
      data: data
    })
  }
}

export const actionUserAdd = (data) => {
  return async (dispatch) => {
    const response = await userService.postUser(data)
    
    dispatch({
      type: 'USERADD',
      data: response
    })
  }
}