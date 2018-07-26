import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import UserListItem from './UserListItem'

class UserList extends Component {
  render() {
    return (
      <List>
        {this.props.users.map(user => <UserListItem key={user.id} user={user} />)}
      </List>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(UserList)