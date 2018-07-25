import React from 'react'
import { Link } from 'react-router-dom'
import { List, Icon } from 'semantic-ui-react'
import Moment from 'moment'

class BlogListItem extends React.Component {
  render () {
    var icon = this.props.blog.sticky? 'exclamation' : 'envelope outline'

    return (
      <List.Item
        active
        as={Link}
        to={`/view/${this.props.blog.id}`}
      >   
        <Icon name={icon} />
        <List.Content>    
          <List.Header>{this.props.blog.title}</List.Header>
          {this.props.blog.user.name} - {Moment(this.props.blog.created).fromNow()}
        </List.Content>
      </List.Item>
    )
  }
}

export default BlogListItem