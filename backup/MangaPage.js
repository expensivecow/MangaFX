import React, {Component} from 'react';
import './MangaPage.css';

class MangaPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("child component rendering");
    return (
      <div key={this.props.pageConfig} className="MangaPage">
        <img src={this.props.pageConfig.img} draggable="false" unselectable="on"></img>
      </div>
    )
  }
}


export default MangaPage;
