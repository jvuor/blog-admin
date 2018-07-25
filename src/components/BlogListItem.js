import React from 'react'
import { Link } from 'react-router-dom'

class BlogListItem extends React.Component {
  render () {
    return (
      <div>
        <Link to={`/view/${this.props.blog.id}`}>
          {this.props.blog.title}
        </Link>
      </div>
    )
  }
}

export default BlogListItem