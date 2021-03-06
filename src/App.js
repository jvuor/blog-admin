import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Grid, Dimmer, Loader } from 'semantic-ui-react'
import initializeLogin from './config/loginInitialization'
import { actionUserFromStorage } from './actions/loginActions'
import { actionBlogInit } from './actions/blogActions'
import { actionUsersInit } from './actions/userActions'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'
import NewBlogForm from './components/NewBlogForm'
import MenuBar from './components/MenuBar'
import SingleBlogView from './components/SingleBlogView'
import EditBlogForm from './components/EditBlogForm'
import UserList from './components/UserList'
import SingleUserView from './components/SingleUserView'
import NewUserForm from './components/NewUserForm'

class App extends React.Component {
  componentDidMount = async () => {
    const user = initializeLogin()
    if (user) { this.props.actionUserFromStorage(user) }

    await this.props.actionBlogInit()
    await this.props.actionUsersInit()
  }

  render() {
    var loading = !this.props.users || !this.props.blogs
    if(loading) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      )
    } else if(!this.props.login.loggedIn && !this.props.login.demo) {
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
          <Router basename='/admin'>
            <div>
              <MenuBar />
              <Switch>
                <Route exact path='/' render={() => <BlogList />} />
                <Route path='/new' render={() => <NewBlogForm />} />
                <Route path='/view/:id' render={({match}) => <SingleBlogView blogId={match.params.id} />} />
                <Route path='/edit/:id' render={({match}) => <EditBlogForm blogId={match.params.id} />} />
                <Route exact path='/users' render={() => <UserList />} />
                <Route path='/users/:id' render={({match}) => <SingleUserView userId={match.params.id} />} />
                <Route path='/newuser' render={() => <NewUserForm />} />
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
    login: state.login,
    blogs: state.blogs,
    users: state.users
  }
}

export default connect(mapStateToProps, { actionBlogInit, actionUsersInit, actionUserFromStorage })(App)
