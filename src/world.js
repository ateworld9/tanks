import { CELL_SIZE } from './constants.js';
import Tank from './tank.js';

export default class World {
  level = null;
  player1Tank = new Tank();
  player2Tank = null;
  enemyTanks = [];

  setLevel(data) {
    this.level = data.map((blocks, y) => {
      return blocks.map((block, x) => {
        return {
          x: x * CELL_SIZE,
          y: y * CELL_SIZE,
          sprite: block,
        };
      });
    });
  }

  update(activeKeys) {
    this.player1Tank.update(activeKeys);
  }
}
