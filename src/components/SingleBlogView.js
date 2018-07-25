import React, { Component } from 'react'
import { connect } from 'react-redux'

class SingleBlogView extends Component {
  render() {
    blog = this.props.blogs.find(blog => blog.id === this.props.blogId)
    if(!blog) {
      return (
        <div>
          No blog found!
        </div>
      )
    } else {
      return (
        <div>
          {blog.title}
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