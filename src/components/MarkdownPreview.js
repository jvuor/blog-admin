import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { Segment, Divider } from 'semantic-ui-react'

class MarkdownPreview extends Component {
  render() {
    return (
      <div>
        <Divider />
        <h3>Preview</h3>
        <Segment>
          <ReactMarkdown source={this.props.content} />
        </Segment>
      </div>
    )
  }
}

export default MarkdownPreview