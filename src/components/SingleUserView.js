import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SingleUserView extends Component {
  render() {
    const user = this.props.users.find(user => user.id === this.props.userId)
    return (
      <div>    
        <h3>{user.name}</h3>
        <h5>{user.username}</h5>
        <br />
        {user.blogs.length > 0 ?
        user.blogs.map(blog => 
          <Link key={blog._id} to={`/view/${blog._id}`}>
            {blog.title}<br />
          </Link>
        ) :
        <p>User hasn't added blog posts.</p>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(SingleUserView)