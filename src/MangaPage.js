import React, {Component} from 'react';
import './MangaPage.css';

class MangaPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MangaPage">
        <img src={this.props.imgSrc.img} draggable="false" unselectable="on"></img>
      </div>
    )
  }
}


export default MangaPage;
