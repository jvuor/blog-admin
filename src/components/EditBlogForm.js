import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Form, Button, TextArea, Radio } from 'semantic-ui-react'
import { actionBlogEdit } from '../actions/blogActions'
import MarkdownPreview from './MarkdownPreview'

class EditBlogForm extends Component {
  constructor (props) {
    super(props)
    const blog = this.props.blogs.find(blog => blog.id === this.props.blogId)
    this.state = {
      title: blog.title,
      content: blog.content,
      sticky: blog.sticky,
      published: blog.published,
      submitted: false
    }
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
      id: this.props.blogId,
      title: this.state.title,
      content: this.state.content,
      sticky: this.state.sticky,
      published: this.state.published
    }

    this.props.actionBlogEdit(dataToSubmit)
    this.setState({submitted: true})
  }

  render() {
    return (
      <div>
        {this.state.submitted? <Redirect to='/' /> : null}
        <Form onKeyPress={this.onKeyPress} onSubmit={this.formSubmit}>
          <Form.Field>
            <label>Title</label>
            <input placeholder='Title' value={this.state.title} onChange={this.handleTitleChange} />
          </Form.Field>
          <Radio toggle label='Make this post important' checked={this.state.sticky} onChange={this.handleStickyChange} />
          <TextArea rows={10} placeholder='Write here...' value={this.state.content} onChange={this.handleContentChange} />
          <Button color='grey' type='submit' disabled={this.props.login.demo}>Submit</Button>
          <Button color='grey' type='reset'>Reset</Button>
          <Button color='grey' as={Link} to='/'>Cancel</Button>
        </Form>
        <MarkdownPreview content={this.state.content} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    login: state.login
  }
}

export default connect(mapStateToProps, { actionBlogEdit })(EditBlogForm)
