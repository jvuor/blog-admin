import axios from 'axios'

var baseUrl = 'http://localhost:3003/api/users'
const hostname = window && window.location && window.location.hostname
if(hostname !== 'localhost') {
  baseUrl = '/api/users'
}

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const postUser = async (data) => {
  const config = {
    headers: { 'Authorization': token}
  }

  const response = await axios.post(baseUrl, data, config)
  return response.data

}

export default { setToken, getAll, postUser }