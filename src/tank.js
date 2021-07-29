export default class Tank {
  direction = 0;
  x = 100;
  y = 100;
  animationFrame = 0;
  frames = [
    [0 * 32, 0 * 32, 32, 32],
    [1 * 32, 0 * 32, 32, 32],
    [6 * 32, 0 * 32, 32, 32],
    [7 * 32, 0 * 32, 32, 32],
    [4 * 32, 0 * 32, 32, 32],
    [5 * 32, 0 * 32, 32, 32],
    [2 * 32, 0 * 32, 32, 32],
    [3 * 32, 0 * 32, 32, 32],
  ];

  update(activeKeys) {
    if (activeKeys.has('ArrowUp')) {
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
    this[axis] += value;
    this.direction = direction;
    this.animationFrame ^= 1;
  }
}
