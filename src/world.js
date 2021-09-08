import { CELL_SIZE, Direction } from './constants.js';
import Tank from './tank.js';

export default class World {
  level = null;
  player1Tank = new Tank();
  player2Tank = null;
  enemyTanks = [];

  get size() {
    return this.level[0].length * CELL_SIZE;
  }

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
    this.player1Tank.update(this, activeKeys);
  }

  canMove(object) {
    if (object.direction === Direction.UP) {
      const nextY = object.y - object.speed;
      if (nextY <= 0) {
        return false;
      } else {
        return true;
      }
    } else if (object.direction === Direction.RIGHT) {
      const nextX = object.x - object.speed;
      if (nextX <= this.size) {
        return false;
      } else {
        return true;
      }
    } else if (object.direction === Direction.DOWN) {
      const nextY = object.x + object.speed;
      if (nextY <= this.size) {
        return false;
      } else {
        return true;
      }
    } else if (object.direction === Direction.LEFT) {
      const nextX = object.x + object.speed;
      if (nextX <= 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
