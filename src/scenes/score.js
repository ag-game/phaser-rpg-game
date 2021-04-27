import Phaser from 'phaser';
import { sortScores } from '../modules/game-score';
import { createTable, addValuesToTable } from '../modules/dom';

class Score extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  create() {
    const { width, height } = this.sys.game.config;
    this.scores = this.sys.game.globals.allScores.result.sort(sortScores);

    if (this.scores) {
      // this.add.text(width / 2, 100, 'SCORES', { fill: '#fff' });
      this.tBody = createTable();
      addValuesToTable(this.scores);
    } else {
      this.add.text(0, 0, 'There was an error while trying to get the scores.', { fill: '#fff' });
    }
  }
}

export default Score;