import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'
import { List } from 'semantic-ui-react'

class BlogList extends React.Component {
  render() {
    if (this.props.blogs) {
      return (
        <List divided verticalAlign='middle'>
          {this.props.blogs.map(blog => <BlogListItem key={blog.id} blog={blog} />)}
        </List>
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