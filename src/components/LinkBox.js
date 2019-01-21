import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddLink from './AddLink'
import LinkListItem from './LinkListItem'
import { List } from 'semantic-ui-react'

class LinkBox extends Component {
  render() {
    return (
      <div>
        <AddLink />
        <List divided verticalAlign='middle'>
          {this.props.links? 
            this.props.links.map(link => <LinkListItem key={link.id} link={link} />) :
            'No links yets'
          }
        </List>
      </div>
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    links: state.links
  }
}

export default connect(mapStateToProps, null)(LinkBox)
