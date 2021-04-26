import Phaser from 'phaser';
import './assets/stylesheets/style.scss';
import SimpleScene from './scenes/simple-scene';
import config from './config/config';
import Boot from './scenes/boot';
import Preloader from './scenes/preloader';
import Title from './scenes/title';
import Game from './scenes/game';

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene,
};

class GameManager extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', Boot);
    this.scene.add('Preloader', Preloader);
    this.scene.add('Title', Title);
    this.scene.add('Game', Game);
    this.scene.start('Boot');
  }
}

window.game = new GameManager();
