import axios from 'axios'

var baseUrl = 'http://localhost:3003/api/links'
const hostname = window && window.location && window.location.hostname
if(hostname !== 'localhost') {
  baseUrl = '/api/links'
}

let token

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const postLink = async (newLink) => {
  const config = {
    headers: { 'Authorization': token }
  }

  const response = await axios.post(baseUrl, newLink, config)
  return response.data
}

export default { getAll, setToken, postLink }
