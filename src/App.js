import React, {Component} from 'react';
import './App.css';
import MangaPanel from './MangaPanel';

class App extends Component {
  configuration = {
    title: "Boku No Hero Academia",
    chapterNum: 3,
    allPages: {
      1: {
        img: "https://i10.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262013.jpg"
      },
      2: {
        img: "https://i8.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262015.jpg"
      },
      3: {
        img: "https://i4.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262017.jpg"
      },
      4: {
        img: "https://i8.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262019.jpg"
      },
      5: {
        img: "https://i3.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262021.jpg"
      },
      6: {
        img: "https://i3.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262023.jpg"
      },
      7: {
        img: "https://i3.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262025.jpg"
      },
      8: {
        img: "https://i1.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262027.jpg"
      },
      9: {
        img: "https://i7.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262029.jpg"
      },
      10: {
        img: "https://i1.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262031.jpg"
      },
      11: {
        img: "https://i7.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262033.jpg"
      },
      12: {
        img: "https://i7.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262035.jpg"
      },
      13: {
        img: "https://i3.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262037.jpg"
      },
      14: {
        img: "https://i9.mangareader.net/boku-no-hero-academia/3/boku-no-hero-academia-5262039.jpg"
      }
    }
  }

  constructor(props) {
    super(props);

    if (1 in this.configuration.allPages) {
      this.setCurrentPageConfiguration(1);
    }

    this.onPageClick = this.onPageClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.myRef = React.createRef();
  }


  setCurrentPageConfiguration(index) {
      this.state = {
        index: 1,
        img: this.configuration.allPages[index].img,
        soundFX: this.configuration.allPages[index].soundFX,
        backgroundFX: this.configuration.allPages[index].backgroundFX
      } 
  }

  onPageClick(e) {
    var posX = e.clientX;

    var mangaContainerDiv = document.getElementById("MangaContainer");

    var MangaPanelX = posX - mangaContainerDiv.offsetLeft;
    var halfwayPointX = mangaContainerDiv.offsetWidth / 2.0;

    if (MangaPanelX < halfwayPointX) {
      this.handlePageBackwardEvent();
      console.log("page backwards");
    }
    else {
      this.handlePageForwardEvent();
      console.log("page forward");
    }
    // console.log("item clicked on " + MangaPanelX + ", " + MangaPanelY);
  }

  updateState(index, img, soundFX, backgroundFX) {
    this.setState({
      index: index,
      img: img,
      soundFX: soundFX,
      backgroundFX: backgroundFX
    });
  }

  handlePageForwardEvent() {
    console.log("Handling Page Forward Event");

    var nextPageIndex = this.state["index"] + 1;

    if (nextPageIndex in this.configuration.allPages) {
      this.updateState(nextPageIndex, 
        this.configuration.allPages[nextPageIndex].img, 
        this.configuration.allPages[nextPageIndex].soundFX,
        this.configuration.allPages[nextPageIndex].backgroundFX);
    }
  }

  handlePageBackwardEvent() {
    console.log("Handling Page Backward Event");

    var nextPageIndex = this.state["index"] - 1;
    if (nextPageIndex in this.configuration.allPages) {
      this.updateState(nextPageIndex, 
        this.configuration.allPages[nextPageIndex].img, 
        this.configuration.allPages[nextPageIndex].soundFX,
        this.configuration.allPages[nextPageIndex].backgroundFX);
    }
  }
  
  onKeyUp(e) {
    if (e.key === 'ArrowRight') {
      this.handlePageForwardEvent();
    } else if (e.key === 'ArrowLeft') {
      this.handlePageBackwardEvent();
    }
  }

  render() {
    return (
      <div className="App" onKeyUp={this.onKeyUp} tabIndex="0" >
        <header className="App-header">
          <h2> { this.configuration.title } </h2>
          <div onClick={this.onPageClick} id="MangaContainer">
            <MangaPanel id="MangaPanel" pageConfig={this.state} />
          </div>
        </header>
      </div>
    )
  }
}

export default App;
