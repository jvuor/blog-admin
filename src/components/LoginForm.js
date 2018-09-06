import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { actionLogin, actionDemoIn } from '../actions/loginActions'


class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {username: '', password: ''}
  }

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  formSubmit = (e) => {
    e.preventDefault()

    this.props.actionLogin({username:this.state.username, password:this.state.password})
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmit}>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' value={this.state.username} onChange={this.handleUsernameChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type='password' value={this.state.password} placeholder='Password' onChange={this.handlePasswordChange} />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        <br />
        <Button primary onClick={() => this.props.actionDemoIn()}>Enter in demo mode</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, { actionLogin, actionDemoIn })(LoginForm)
