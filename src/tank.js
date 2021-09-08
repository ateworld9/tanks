import { CELL_SIZE } from './constants.js';

export default class Tank {
  direction = 0;
  x = 193;
  y = 384;
  speed = 2;
  animationFrame = 0;
  frames = [
    [0 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [1 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [6 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [7 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [4 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [5 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [2 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [3 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
  ];

  update(world, activeKeys) {
    if (activeKeys.has('ArrowUp') && world.canMove(this)) {
      this._move(0, 'y', -1);
    } else if (activeKeys.has('ArrowLeft')) {
      this._move(2, 'x', -1);
    } else if (activeKeys.has('ArrowDown')) {
      this._move(4, 'y', 1);
    } else if (activeKeys.has('ArrowRight')) {
      this._move(6, 'x', 1);
    }
  }

  get sprite() {
    return this.frames[this.direction + this.animationFrame];
  }

  _move(direction, axis, value) {
    this[axis] += this.speed * value;
    this.direction = direction;
    this.animationFrame ^= 1;
  }
}
