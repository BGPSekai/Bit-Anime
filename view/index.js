import React, { Component } from 'react'
import axios from 'axios'

class Index extends Component {
  state = {
    uri: ''
  }

  sendRequest() {
    axios.post('api/schedule/', {
      uri: this.state.uri
    })
  }

  render () {
    return (
      <div>
        <input value={this.state.uri} onChange={(val) => this.setState({uri: val.target.value})} />
        <button onClick={this.sendRequest.bind(this)}>send</button>
      </div>
    )
  }
}

export default Index