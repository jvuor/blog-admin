import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, Button, TextArea, Radio } from 'semantic-ui-react'
import { actionBlogAdd } from '../actions/blogActions'
import MarkdownPreview from './MarkdownPreview'

class NewBlog extends Component {
  constructor (props) {
    super(props)
    this.state = {title: '', content: '', sticky: false, submitted: false}
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value})
  }

  handleContentChange = (event) => {
    this.setState({content: event.target.value})
  }

  handleStickyChange = (event) => {
    this.setState({sticky: !this.state.sticky})
  }
  onKeyPress(event) {
    //Prevents send on Enter key
    if (event.target.type !== 'textarea' && event.which === 13 ) {
      event.preventDefault();
    }
  }

  formSubmit = (event) => {
    const dataToSubmit = {
      title: this.state.title,
      content: this.state.content,
      sticky: this.state.sticky
    }

    if (dataToSubmit.title && dataToSubmit.content) {
      this.props.actionBlogAdd(dataToSubmit)
      this.setState({submitted: true})
    }
  }

  render() {
    return (
      <div>
        {this.state.submitted? <Redirect to='/' /> : null}
        <Form onKeyPress={this.onKeyPress} onSubmit={this.formSubmit}>
          <Form.Field>
            <label>Title</label>
            <input placeholder='Title' value={this.state.username} onChange={this.handleTitleChange} />
          </Form.Field>
          <Radio toggle label='Make this post important' onChange={this.handleStickyChange} />
          <TextArea rows={10} placeholder='Write here...' onChange={this.handleContentChange} />
          {!this.state.content || !this.state.title ? 
          <Button disabled color='grey' type='submit'>Submit</Button> :
          <Button color='grey' type='submit'>Submit</Button> }
          <Button color='grey' type='reset'>Reset</Button>
        </Form>
        <MarkdownPreview content={this.state.content} />
      </div>
    )
  }
}

export default connect(null, { actionBlogAdd })(NewBlog)