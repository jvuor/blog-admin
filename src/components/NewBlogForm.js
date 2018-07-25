import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, TextArea, Radio } from 'semantic-ui-react'
import { actionBlogAdd } from '../actions/blogActions'
import MarkdownPreview from './MarkdownPreview'

class NewBlog extends Component {
  constructor (props) {
    super(props)
    this.state = {title: '', content: '', sticky: false}
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

  formSubmit = (event) => {
    const dataToSubmit = {
      title: this.state.title,
      content: this.state.content,
      sticky: this.state.sticky
    }

    this.props.actionBlogAdd(dataToSubmit)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmit}>
          <Form.Field>
            <label>Title</label>
            <input placeholder='Title' value={this.state.username} onChange={this.handleTitleChange} />
          </Form.Field>
          <Radio toggle label='Make this post important' onChange={this.handleStickyChange} />
          <TextArea rows={10} placeholder='Write here...' onChange={this.handleContentChange} />
          <Button type='submit'>Submit</Button>
          <Button type='reset'>Reset</Button>
        </Form>
        <MarkdownPreview content={this.state.content} />
      </div>
    )
  }
}

export default connect(null, { actionBlogAdd })(NewBlog)