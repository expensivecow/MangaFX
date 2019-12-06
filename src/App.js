import React, {Component} from 'react';
import './App.css';
import PanelController from './PanelController';
import BackgroundEffect from './BackgroundEffect';
import SoundEffect from './SoundEffect';
import AllConfigurations from './json_configurations/AllConfigurations.json'
import TutorialSlides from './json_configurations/Tutorial.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      canAnimate: true
    }

    var allPages = AllConfigurations['pages'];

    var shuffledPageConfig = this.shuffle(allPages);

    var config = {};
    config['delayConfig'] = 500;
    config['pagesConfig'] = TutorialSlides['pagesConfig'];
    config['soundEffectConfig'] = TutorialSlides['soundEffectConfig'];
    config['backgroundMusicConfig'] = TutorialSlides['backgroundMusicConfig'];

    for (var i = 0; i < allPages.length; i++) {
      for (var y = 0; y < allPages[i]['pagesConfig'].length; y++) {
        console.log('OY')
        config['pagesConfig'].push(allPages[i]['pagesConfig'][y]);
      }

      for (var y = 0; y < allPages[i]['soundEffectConfig'].length; y++) {
        console.log('OY')
        config['soundEffectConfig'].push(allPages[i]['soundEffectConfig'][y]);
      }

      for (var y = 0; y < allPages[i]['backgroundMusicConfig'].length; y++) {
        console.log('OY')
        config['backgroundMusicConfig'].push(allPages[i]['backgroundMusicConfig'][y]);
      }
    }
    
    this.configuration = config;
    this.onPageClick = this.onPageClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.generateBackgroundEffectComponent = this.generateBackgroundEffectComponent.bind(this);
    this.generateSoundEffectComponents = this.generateSoundEffectComponents.bind(this);
    this.createSoundEffectComponent = this.createSoundEffectComponent.bind(this);
    this.updateCanActivateEvent = this.updateCanActivateEvent.bind(this);
    this.myRef = React.createRef();
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
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
  }

  updateState(index) {
    this.setState({
      index: index
    });
  }

  updateCanActivateEvent(flag) {
    this.setState({
      canAnimate: flag
    });
  }

  handlePageForwardEvent() {
    console.log("Handling Page Forward Event");

    var nextPageIndex = this.state["index"] + 1;

    if (nextPageIndex < this.configuration['pagesConfig'].length && this.state['canAnimate']) {
      this.updateState(nextPageIndex);

      this.updateCanActivateEvent(false);
      setTimeout(() => {this.updateCanActivateEvent(true);}, this.configuration.delayConfig);
    }
    else {
      console.log('cannot animate');
    }
  }

  handlePageBackwardEvent() {
    console.log("Handling Page Backward Event");

    var nextPageIndex = this.state["index"] - 1;
    if (nextPageIndex >= 0 && this.state['canAnimate']) {
      this.updateState(nextPageIndex);

      this.updateCanActivateEvent(false);
      setTimeout(() => {this.updateCanActivateEvent(true);}, this.configuration.delayConfig);
    }
    else {
      console.log('cannot animate');
    }
  }

  generateBackgroundEffectComponent(config) {
    if (typeof config !== 'undefined' && typeof config.music !== 'undefined') {
      console.log(config.music);
      return <BackgroundEffect config={config.music} key={config.id}/>
    }
  }

  generateSoundEffectComponents(config) {
    if (typeof config !== 'undefined' && typeof config.soundEffects !== 'undefined') {
      return config.soundEffects.map(this.createSoundEffectComponent);
    }
  }

  createSoundEffectComponent(config) {
    console.log("sound effects to play: " + config.url);
    return <SoundEffect url={config.url} key={config.id} delay={config.delay} volume={config.volume}/>
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
          <div onClick={this.onPageClick} id="MangaContainer">
            <PanelController delayConfig={this.configuration.delayConfig} state={this.state} pagesConfig={this.configuration.pagesConfig}/>
          </div>
        </header>
        {this.generateSoundEffectComponents(this.configuration.soundEffectConfig[this.state.index])}
        <BackgroundEffect config={this.configuration.backgroundMusicConfig[this.state.index].music}/>
      </div>
    )
  }
}

export default App;
