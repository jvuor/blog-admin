import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { actionLogout } from '../actions/loginActions'

class MenuBar extends React.Component {
  state = { activeItem: window.location.pathname.substring(1) }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  logout = (event) => {
    this.props.actionLogout()
  }
 
  render() {
    const { activeItem } = this.state
    const menuItemColor = 'red'

    return (
      <Menu inverted stackable>
        <Menu.Item
          as={Link}
          to='/'
          name='blogs'
          active={activeItem === 'blogs'}
          onClick={this.handleItemClick}
          content='Blog List'
          color={menuItemColor}
        />
        <Menu.Item
          as={Link}
          to='/new'
          name='addblog'
          active={activeItem === 'addblog'}
          onClick={this.handleItemClick}
          content='Add Blog Post'
          color={menuItemColor}
        />
        <Menu.Item
          as={Link}
          to='/users'
          name='users'
          active={activeItem === 'users'}
          onClick={this.handleItemClick}
          content='User List'
          color={menuItemColor}
        />
        <Menu.Item
          as={Link}
          to='/newuser'
          name='newuser'
          active={activeItem === 'newuser'}
          onClick={this.handleItemClick}
          content='Add New User'
          color={menuItemColor}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            as={Button}
            onClick={this.logout}
            color={menuItemColor}
            content='Logout'
            icon='user'
          />
        </Menu.Menu>       
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}


export default connect(mapStateToProps, { actionLogout })(MenuBar)