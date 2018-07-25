import React from 'react'

class BlogListItem extends React.Component {
  render () {
    return (
      <div>
        {this.props.blog.title}
      </div>
    )
  }
}

export default BlogListItem