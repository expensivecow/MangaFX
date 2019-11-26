import React, {Component} from 'react';
import './App.css';
import PanelController from './PanelController';
import BackgroundEffect from './BackgroundEffect';
import SoundEffect from './SoundEffect';

class App extends Component {
  configuration = {
    title: "Boku No Hero Academia",
    chapterNum: 3,
    delayConfig: 500,
    minIndex: 0,
    maxIndex: 100,
    pagesConfig: [
      {id: 2, img: "https://pbs.twimg.com/profile_images/1078262307661111297/R_XwpK5f.jpg"}, // Leave Alone
      {id: 3, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/004.JPG"},
      {id: 4, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/005.JPG"},
      {id: 5, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/006.JPG"},
      {id: 6, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/007.JPG"},
      {id: 7, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/008.JPG"},
      {id: 8, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/009.JPG"},
      {id: 9, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/010.JPG"},
      {id: 10, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/011.JPG"},
      {id: 11, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/012.JPG"},
      {id: 12, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/013.JPG"},
      {id: 13, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/014.JPG"},
      {id: 14, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/015.JPG"},
      {id: 15, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/016.JPG"},
      {id: 16, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/017.JPG"},
      {id: 17, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/018.JPG"},
      {id: 18, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/019.JPG"},
      {id: 19, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/020.JPG"},
      {id: 20, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/021.JPG"},
      {id: 21, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/022.JPG"},
      {id: 22, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/023.JPG"},
      {id: 23, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/024.JPG"},
      {id: 24, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/025.JPG"},
      {id: 25, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/026.JPG"},
      {id: 26, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/027.JPG"},
      {id: 27, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/028.JPG"},
      {id: 28, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/029.JPG"},
      {id: 29, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/030.JPG"},
      {id: 30, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/031.JPG"},
      {id: 31, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/032.JPG"},
      {id: 32, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/033.JPG"},
      {id: 33, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/034.JPG"},
      {id: 34, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/035.JPG"},
      {id: 35, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/036.JPG"},
      {id: 36, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/037.JPG"},
      {id: 37, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/038.JPG"},
      {id: 38, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/039.JPG"},
      {id: 39, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/040.JPG"},
      {id: 40, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/041.JPG"},
      {id: 41, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/042.JPG"},
      {id: 42, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/043.JPG"},
      {id: 43, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/044.JPG"},
      {id: 44, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/045.JPG"},
      {id: 45, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/046.JPG"},
      {id: 46, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/047.JPG"},
      {id: 47, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/048.JPG"},
      {id: 48, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/049.JPG"},
      {id: 49, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/050.JPG"},
      {id: 50, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/051.JPG"},
      {id: 51, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/052.JPG"},
      {id: 52, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/053.JPG"},
      {id: 53, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/054.JPG"},
      {id: 54, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/055.JPG"},
      {id: 55, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/056.JPG"},
      {id: 56, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/057.JPG"},
      {id: 57, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/058.JPG"},
      {id: 58, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/059.JPG"},
      {id: 59, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/060.JPG"},
      {id: 60, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/061.JPG"},
      {id: 61, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/062.JPG"},
      {id: 62, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/063.JPG"},
      {id: 63, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/064.JPG"},
      {id: 64, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/065.JPG"},
      {id: 65, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/066.JPG"},
      {id: 66, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/067.JPG"},
      {id: 67, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/068.JPG"},
      {id: 68, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/069.JPG"},
      {id: 69, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/070.JPG"},
      {id: 70, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/071.JPG"},
      {id: 71, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/072.JPG"},
      {id: 72, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/073.JPG"},
      {id: 73, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/074.JPG"},
      {id: 74, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/075.JPG"},
      {id: 75, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/076.JPG"},
      {id: 76, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/077.JPG"},
      {id: 77, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/078.JPG"},
      {id: 78, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/079.JPG"},
      {id: 79, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/080.JPG"},
      {id: 80, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/081.JPG"},
      {id: 81, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/082.JPG"},
      {id: 82, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/083.JPG"},
      {id: 83, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/084.JPG"},
      {id: 84, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/085.JPG"},
      {id: 85, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/086.JPG"},
      {id: 86, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/087.JPG"},
      {id: 87, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/088.JPG"},
      {id: 88, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/089.JPG"},
      {id: 89, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/090.JPG"},
      {id: 90, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/091.JPG"},
      {id: 91, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/092.JPG"},
      {id: 92, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/093.JPG"},
      {id: 93, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/094.JPG"},
      {id: 94, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/095.JPG"},
      {id: 95, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/096.JPG"},
      {id: 96, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/097.JPG"},
      {id: 97, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/098.JPG"},
      {id: 98, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/099.JPG"},
      {id: 99, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/100.JPG"},
      {id: 100, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/101.JPG"},
      {id: 101, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/102.JPG"},
      {id: 102, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/103.JPG"},
      {id: 103, img: "https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/Panels/BokuNoHero/3/104.JPG"}
    ],
    soundEffectConfig: [
      {id: 2, soundEffects: []}, // Leave Blank
      {id: 3, soundEffects: [{id: 0, url: 'https://github.com/expensivecow/ImageAndSoundRepo/raw/master/SoundEffects/SchoolBell.wav', volume: 100, delay: 0}]},
      {id: 4, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}, {id: 1, url: '', volume: 100, delay: 5}, {id: 2, url: '', volume: 100, delay: 5}]},
      {id: 5, soundEffects: [{id: 0, url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/SoundEffects/ScrewOff.mp3', volume: 100, delay: 0}]},
      {id: 6, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 7, soundEffects: [{id: 0, url: 'https://github.com/expensivecow/ImageAndSoundRepo/raw/master/SoundEffects/ConcreteFootSteps.wav', volume: 100, delay: 5}]},
      {id: 8, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 9, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 10, soundEffects: [{id: 0, url: 'https://github.com/expensivecow/ImageAndSoundRepo/raw/master/SoundEffects/WobblyLegs.wav', volume: 100, delay: 5}]},
      {id: 11, soundEffects: [{id: 0, url: 'https://github.com/expensivecow/ImageAndSoundRepo/raw/master/SoundEffects/SlippingSound.wav', volume: 100, delay: 5}]},
      {id: 12, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 13, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 14, soundEffects: [{id: 0, url: 'https://github.com/expensivecow/ImageAndSoundRepo/raw/master/SoundEffects/InAirLegFlail.flac', volume: 100, delay: 5}]},
      {id: 15, soundEffects: [{id: 0, url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/SoundEffects/JumpLand.m4a', volume: 100, delay: 5}]},
      {id: 16, soundEffects: [{id: 0, url: 'https://github.com/expensivecow/ImageAndSoundRepo/raw/master/SoundEffects/SingleClap.wav', volume: 100, delay: 1000}]},
      {id: 17, soundEffects: [{id: 0, url: '', volume: 50, delay: 5}]},
      {id: 18, soundEffects: [{id: 0, url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/SoundEffects/FemaleByeBye.mp3', volume: 25, delay: 5}]},
      {id: 19, soundEffects: [{id: 0, url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/SoundEffects/WowMeme.mp3', volume: 10, delay: 3000}]},
      {id: 20, soundEffects: [{id: 0, url: '', volume: 25, delay: 5}]},
      {id: 21, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 22, soundEffects: [{id: 0, url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/SoundEffects/Crickets.mp3', volume: 10, delay: 5}]},
      {id: 23, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 24, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 25, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 26, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 27, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 28, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 29, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 30, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 31, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 32, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 33, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 34, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 35, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 36, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 37, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 38, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 39, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 40, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 41, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 42, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 43, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 44, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 45, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 46, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 47, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 48, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 49, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 50, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 51, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 52, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 53, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 54, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 55, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 56, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 57, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 58, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 59, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 60, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 61, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 62, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 63, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 64, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 65, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 66, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 67, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 68, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 69, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 70, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 71, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 72, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 73, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 74, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 75, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 76, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 77, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 78, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 79, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 80, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 81, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 82, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 83, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 84, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 85, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 86, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 87, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 88, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 89, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 90, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 91, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 92, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 93, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 94, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 95, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 96, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 97, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 98, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 99, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 100, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 101, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 102, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 103, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]},
      {id: 104, soundEffects: [{id: 0, url: '', volume: 100, delay: 5}]}
    ],
    backgroundMusicConfig: [
      {id: 2, music: {} },
      {id: 3, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 4, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 5, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 6, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 7, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 8, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 9, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 10, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 11, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 12, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 13, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 14, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 15, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 16, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 17, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 18, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 19, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 20, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 50} },
      {id: 21, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 10} },
      {id: 22, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 10} },
      {id: 23, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 10} },
      {id: 24, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 10} },
      {id: 25, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/MorningBirds.mp3', volume: 10} },
      {id: 26, music: {} },
      {id: 27, music: {} },
      {id: 28, music: {} },
      {id: 29, music: {} },
      {id: 30, music: {} },
      {id: 31, music: {} },
      {id: 32, music: {} },
      {id: 33, music: {} },
      {id: 34, music: {} },
      {id: 35, music: {} },
      {id: 36, music: {} },
      {id: 37, music: {} },
      {id: 38, music: {} },
      {id: 39, music: {} },
      {id: 40, music: {} },
      {id: 41, music: {} },
      {id: 42, music: {} },
      {id: 43, music: {} },
      {id: 44, music: {} },
      {id: 45, music: {} },
      {id: 46, music: {} },
      {id: 47, music: {} },
      {id: 48, music: {} },
      {id: 49, music: {} },
      {id: 50, music: {} },
      {id: 51, music: {} },
      {id: 52, music: {} },
      {id: 53, music: {} },
      {id: 54, music: {} },
      {id: 55, music: {} },
      {id: 56, music: {} },
      {id: 57, music: {} },
      {id: 58, music: {} },
      {id: 59, music: {} },
      {id: 60, music: {} },
      {id: 61, music: {} },
      {id: 62, music: {} },
      {id: 63, music: {} },
      {id: 64, music: {} },
      {id: 65, music: {} },
      {id: 66, music: {} },
      {id: 67, music: {} },
      {id: 68, music: {} },
      {id: 69, music: {} },
      {id: 70, music: {} },
      {id: 71, music: {} },
      {id: 72, music: {} },
      {id: 73, music: {} },
      {id: 74, music: {} },
      {id: 75, music: {} },
      {id: 76, music: {} },
      {id: 77, music: {} },
      {id: 78, music: {} },
      {id: 79, music: {} },
      {id: 80, music: {} },
      {id: 81, music: {} },
      {id: 82, music: {} },
      {id: 83, music: {} },
      {id: 84, music: {} },
      {id: 85, music: {} },
      {id: 86, music: {} },
      {id: 87, music: {} },
      {id: 88, music: {} },
      {id: 89, music: {} },
      {id: 90, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 91, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 92, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 93, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 94, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 95, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 96, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 97, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 98, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 99, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 100, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 101, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 102, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 103, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} },
      {id: 104, music: {url: 'https://raw.githubusercontent.com/expensivecow/ImageAndSoundRepo/master/BackgroundMusic/BecomeAHero.mp3', config: {volume: 100, delay: 0}} }
    ]
  }

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      canAnimate: true
    } 

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
    // console.log("item clicked on " + MangaPanelX + ", " + MangaPanelY);
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
