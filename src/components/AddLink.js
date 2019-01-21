import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { actionLinkAdd } from '../actions/linkActions'

class AddLink extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: '',
      description: '',
      canSubmit: false,
    }
  }

  handleFieldChange = async (event) => {
    const submitStatus = this.checkValidity({...this.state, [event.target.name]: event.target.value})
    await this.setState({[event.target.name]: event.target.value, ...submitStatus})
  }

  checkValidity = (fieldState) => {
    let canSubmit
    if(fieldState.url.length < 10 || fieldState.description.length < 10) {
      canSubmit = false
    } else if (fieldState.url.substring(0,4) !== 'http') {
      canSubmit = false
    } else {
      canSubmit = true
    }

    return { canSubmit }
  }

  onSubmit = (event) => {
    const data = {
      url: this.state.url,
      description: this.state.description
    }

    if (this.state.canSubmit && !this.props.login.demo) {
      this.props.actionLinkAdd(data)
      this.setState({url: '', description: ''})
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Url</label>
            <input 
              placeholder = 'Link url'
              value={this.state.url}
              onChange={this.handleFieldChange}
              name='url'
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input 
              placeholder = 'Link description'
              value={this.state.description}
              onChange={this.handleFieldChange}
              name='description'
            />
          </Form.Field>
          <Button
            color='grey'
            type='submit'
            disabled={!this.state.canSubmit}
          >
            Submit
          </Button>
          <Button color='grey' type='reset'>
            Reset
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, { actionLinkAdd })(AddLink)
