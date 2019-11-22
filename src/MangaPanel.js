import React, {Component} from 'react';
import './MangaPanel.css';

class MangaPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("child component rendering");
    return (
      <div key={this.props.pageConfig} className="MangaPanel">
        <img src={this.props.pageConfig.img} draggable="false" unselectable="on"></img>
      </div>
    )
  }
}


export default MangaPanel;
