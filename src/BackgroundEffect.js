import React, { Component } from 'react'
import Sound from 'react-sound';

class BackgroundEffect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Sound 
      url={this.props.config.url}
      playStatus={Sound.status.PLAYING}
      loop={true}
    />
  }
}

export default BackgroundEffect;