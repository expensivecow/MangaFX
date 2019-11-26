import React, { Component } from 'react'
import Sound from 'react-sound';

class SoundEffect extends Component {
  constructor(props) {
    super(props);

    this.state = {playState : Sound.status.PAUSED};
  }

  componentWillMount() {
    var that = this;
    setTimeout(function() {
        that.show();
    }, that.props.delay);
  }

  show() {
    console.log('HELLO');
    this.setState({playState : Sound.status.PLAYING});
  }

  render() {
    return <Sound 
        url={this.props.url}
        playStatus={this.state.playState}
        loop={false}
      />
  }
}


export default SoundEffect;