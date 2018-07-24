import React from 'react'
import { connect } from 'react-redux'
import initializeLogin from './config/loginInitialization'
import { actionUserFromStorage } from './actions/loginActions'
import { actionBlogInit } from './actions/blogActions'
import { actionUsersInit } from './actions/userActions'

class App extends React.Component {
  componentDidMount = async () => {
    const user = initializeLogin()
    if (user) { this.props.actionUserFromStorage(user) }

    await this.props.actionBlogInit()
    await this.props.actionUsersInit()
  }

  render() {
    if(!this.props.login.loggedIn) {
      return (
        <div>
          not logged
        </div>
      )
    } else {
      return (
        <div>
          moo
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, { actionBlogInit, actionUsersInit, actionUserFromStorage })(App)