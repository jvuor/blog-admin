import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from '../reducers/userReducer'
import blogReducer from '../reducers/blogReducer'
import loginReducer from '../reducers/loginReducer'

const reducer = combineReducers({
  users: userReducer,
  blogs: blogReducer,
  login: loginReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store