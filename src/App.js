import React, {Component} from 'react';
import './App.css';
import pageConfig from './json_configurations/3_OnlySoundFX.json'
import PanelController from './PanelController';
import BackgroundEffect from './BackgroundEffect';
import SoundEffect from './SoundEffect';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      canAnimate: true
    } 
    
    this.configuration = pageConfig;
    this.onPageClick = this.onPageClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.generateBackgroundEffectComponent = this.generateBackgroundEffectComponent.bind(this);
    this.generateSoundEffectComponents = this.generateSoundEffectComponents.bind(this);
    this.createSoundEffectComponent = this.createSoundEffectComponent.bind(this);
    this.updateCanActivateEvent = this.updateCanActivateEvent.bind(this);
    this.myRef = React.createRef();
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

    if (nextPageIndex <= this.configuration.maxIndex && this.state['canAnimate']) {
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
    if (nextPageIndex >= this.configuration.minIndex && this.state['canAnimate']) {
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
