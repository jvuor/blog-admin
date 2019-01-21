import React from 'react'
import { List, Icon } from 'semantic-ui-react'
import Moment from 'moment'

class LinkListItem extends React.Component {
  render () {
    var icon = 'arrow alternate circle right outline'

    return (
      <List.Item>   
        <Icon name={icon} />
        <List.Content>
          <a href={this.props.link.url}>  
            <List.Header>
              {this.props.link.description}<br />
              {this.props.link.url}
            </List.Header>
          </a>         
          {this.props.link.user.name} - {Moment(this.props.link.added).fromNow()}
        </List.Content>
      </List.Item>
    )
  }
}

export default LinkListItem
