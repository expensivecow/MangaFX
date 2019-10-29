import React, {Component} from 'react';
import './App.css';
import MangaPage from './MangaPage';

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

  currPage = {}

  constructor(props) {
    super(props);

    if (1 in this.configuration.allPages) {
      this.setCurrentPageConfiguration(1);
    }
  }

  setCurrentPageConfiguration(index) {
      this.currPage["index"] = 1;
      this.currPage["img"] = this.configuration.allPages[index].img;
      this.currPage["soundFX"] = this.configuration.allPages[index].soundFX;
      this.currPage["backgroundFX"] = this.configuration.allPages[index].backgroundFX;
  }

  onPageClick(e) {
    var posX = e.clientX;
    var posY = e.clientY;

    var mangaContainerDiv = document.getElementById("MangaContainer");

    var mangaPageX = posX - mangaContainerDiv.offsetLeft;
    var mangaPageY = posY - mangaContainerDiv.offsetTop;

    var halfwayPointX = mangaContainerDiv.offsetWidth / 2.0;

    if (mangaPageX < halfwayPointX) {
      console.log("page backwards");
    }
    else {
      console.log("page forward");
    }
    // console.log("item clicked on " + mangaPageX + ", " + mangaPageY);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2> { this.configuration.title } </h2>
          <div onClick={this.onPageClick} id="MangaContainer">
            <MangaPage id="MangaPage" imgSrc={this.currPage} />
          </div>
        </header>
      </div>
    )
  }
}

export default App;
