import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    manga_chapter: {
      title: "World Trigger",
      chapter_num: 59,
      manga_pages: [
        {
          id: 1,
          page_img: "https://i998.mangareader.net/world-trigger/186/world-trigger-13026805.jpg",
          panels: [
            {
              panel_id: 1
            }
          ]
        },
        {
          id: 2,
          page_img: "https://i996.mangareader.net/world-trigger/186/world-trigger-13026793.jpg",
          panels: [
            {
              panel_id: 1
            }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            { this.state.manga_chapter.title }
          </h2>
          <img src="https://i998.mangareader.net/world-trigger/186/world-trigger-13026805.jpg"></img>
        </header>
      </div>
    )
  }
}

export default App;
