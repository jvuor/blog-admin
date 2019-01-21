import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from '../reducers/userReducer'
import blogReducer from '../reducers/blogReducer'
import loginReducer from '../reducers/loginReducer'
import linksReducer from '../reducers/linksReducer'

const reducer = combineReducers({
  users: userReducer,
  blogs: blogReducer,
  login: loginReducer,
  links: linksReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
