import React from 'react'
import { Link } from 'react-router-dom'
import { List, Icon } from 'semantic-ui-react'
import Moment from 'moment'

class BlogListItem extends React.Component {
  render () {
    const stickyIcon = this.props.blog.sticky? 'exclamation' : 'envelope outline'
    const publishIcon = this.props.blog.published? 'star' : 'star outline'

    return (
      <List.Item
        active
        as={Link}
        to={`/view/${this.props.blog.id}`}
      >   
        <Icon name={stickyIcon} />
        <Icon name={publishIcon} />
        <List.Content>    
          <List.Header>{this.props.blog.title}</List.Header>
          {this.props.blog.user.name} - {Moment(this.props.blog.created).fromNow()}
        </List.Content>
      </List.Item>
    )
  }
}

export default BlogListItem
