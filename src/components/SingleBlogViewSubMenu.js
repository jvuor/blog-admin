import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Confirm } from 'semantic-ui-react'
import { actionBlogDelete } from '../actions/blogActions'

class SingleBlogViewSubMenu extends React.Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  deleteBlog = (event) => {
    this.props.actionBlogDelete(this.props.blogId)
  }
 
  render() {

    return (
      <Button.Group>
        <Button color='grey' as={Link} to='/' icon='backward' content='Back' />
        <Button color='grey' as={Link} to={`/edit/${this.props.blogId}`} content='Edit' />
        <Button color='grey' onClick={this.open} icon='delete' content='Delete' />
        <Confirm open={this.state.open} onCancel={this.close} onConfirm={this.deleteBlog} />
      </Button.Group>
    )
  }
}

export default connect(null, { actionBlogDelete })(SingleBlogViewSubMenu)