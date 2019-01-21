import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionUserAdd } from '../actions/userActions'
import { Form, Button, Label, Icon } from 'semantic-ui-react'

class NewUserForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      name: '',
      password: '',
      password2: '',
      submitted: false,
      canSubmit: false,
      submitError: ''
    }
  }

  handleFieldChange = async (event) => {
    const submitStatus = this.checkValidity({...this.state, [event.target.name]: event.target.value})
    await this.setState({[event.target.name]: event.target.value, ...submitStatus})
  }

  checkValidity = (fieldState) => {
    let canSubmit, submitError
    if (!fieldState.name || !fieldState.username || !fieldState.password) {
      canSubmit = false
      submitError = 'All fields must be filled!'
    } else if (fieldState.password.length < 8) {
      //password requirements could be better too
      canSubmit = false
      submitError = 'Password must be at least 8 characters long!'
    } else if (fieldState.password !== fieldState.password2) {
      canSubmit = false
      submitError = 'Passwords do not match!'
    } else {
      canSubmit = true
      submitError = ''
    }

    return { canSubmit, submitError }
  }

  onKeyPress(event) {
    //Prevents send on Enter key
    if (event.target.type !== 'textarea' && event.which === 13 ) {
      event.preventDefault();
    }
  }

  formSubmit = (event) => {
    const dataToSubmit = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password
    }

    if (this.state.canSubmit && !this.props.login.demo) {
      this.props.actionUserAdd(dataToSubmit)
      this.setState({submitted: true})
    }
  }

  render() {
    return (
      <div>
        {this.state.submitted? <Redirect to='/users/' /> : null}
        <Form onKeyPress={this.onKeyPress} onSubmit={this.formSubmit}>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' value={this.state.username} onChange={this.handleFieldChange} name='username' />
          </Form.Field>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Name' value={this.state.name} onChange={this.handleFieldChange} name='name' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder='Password' 
              value={this.state.password} 
              onChange={this.handleFieldChange} 
              name='password' 
              type='password'
            />
          </Form.Field>
          <Form.Field>
            <label>Password again</label>
            <input
              placeholder='Password' 
              value={this.state.password2} 
              onChange={this.handleFieldChange} 
              name='password2'
              type='password'
            />
          </Form.Field>
          {this.state.canSubmit && !this.props.login.demo ? 
          <Button color='grey' type='submit'>Submit</Button> :
          <Button disabled color='grey' type='submit'>Submit</Button> }
          <Button color='grey' type='reset'>Reset</Button>
          <br /><br />
          {this.state.submitError ? 
            <Label basic color='red'>
              <Icon name='exclamation circle' />
              {this.state.submitError}
            </Label>
            : null}
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, { actionUserAdd })(NewUserForm)
