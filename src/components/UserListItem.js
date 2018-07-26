import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Icon } from 'semantic-ui-react'

class UserListItem extends Component {
  render() {
    return (
      <List.Item
        active
        as={Link}
        to={`/users/${this.props.user.id}`}
      >
        <Icon name='user circle outline' />
        <List.Content>    
          <List.Header>{this.props.user.name} ({this.props.user.username})</List.Header>
          has added {this.props.user.blogs.length} blog posts
        </List.Content>
        
      </List.Item>
    )
  }
}

export default UserListItem