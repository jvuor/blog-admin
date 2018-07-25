import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import initializeLogin from './config/loginInitialization'
import { actionUserFromStorage } from './actions/loginActions'
import { actionBlogInit } from './actions/blogActions'
import { actionUsersInit } from './actions/userActions'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'
import NewBlogForm from './components/NewBlogForm'
import MenuBar from './components/MenuBar'
import { Container, Grid } from 'semantic-ui-react'

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
        <Container textAlign='center'>
          <Grid centered>
            <Grid.Row verticalAlign='middle'>
              <LoginForm />
            </Grid.Row>
          </Grid>
        </Container>
      )
    } else {
      return (
        <Container>
          <Router>
            <div>
              <MenuBar />
              <Switch>
              <Route exact path='/' render={() => <BlogList />} />
              <Route path='/new' render={() => <NewBlogForm />} />
              </Switch>
            </div>
          </Router>
        </Container>
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