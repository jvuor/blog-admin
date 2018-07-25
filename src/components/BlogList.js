import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

class BlogList extends React.Component {
  render() {
    if (this.props.blogs) {
      return (
        <div>
          {this.props.blogs.map(blog => <BlogListItem key={blog.id} blog={blog} />)}
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps, null)(BlogList)