import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Moment from 'moment'
import SingleBlogViewSubMenu from './SingleBlogViewSubMenu'
import ReactMarkdown from 'react-markdown'

class SingleBlogView extends Component {
  render() {
    const blog = this.props.blogs.find(blog => blog.id === this.props.blogId)
    if(!blog) {
      return (
        <Redirect to='/' />
      )
    } else {
      return (
        <div>
          <SingleBlogViewSubMenu blogId={blog.id}/>
          <h3>{blog.title}</h3>
          <h5>Added by {blog.user.name} {Moment(blog.created).fromNow()}</h5>
          <ReactMarkdown source={blog.content} />
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps, null)(SingleBlogView)