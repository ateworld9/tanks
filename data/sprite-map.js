import { CELL_SIZE } from '../src/constants.js';

export default {
  0: [22 * CELL_SIZE, 15 * CELL_SIZE, CELL_SIZE, CELL_SIZE], // empty
  1: [8 * CELL_SIZE, 11 * (CELL_SIZE / 2), CELL_SIZE, CELL_SIZE], // full wall
  2: [9 * CELL_SIZE, 11 * (CELL_SIZE / 2), CELL_SIZE, CELL_SIZE], // right wall
  3: [10 * CELL_SIZE, 11 * (CELL_SIZE / 2), CELL_SIZE, CELL_SIZE], // bottom wall
  4: [11 * CELL_SIZE, 11 * (CELL_SIZE / 2), CELL_SIZE, CELL_SIZE], // left wall
  5: [12 * CELL_SIZE, 11 * (CELL_SIZE / 2), CELL_SIZE, CELL_SIZE], // top wall
  10: [12 * CELL_SIZE, 13 * (CELL_SIZE / 2), CELL_SIZE, CELL_SIZE], // top armor wall

  // Player1Tank
  11: [0 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // top
  12: [1 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE],
  13: [6 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // right
  14: [7 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE],
  15: [4 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // bottom
  16: [5 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE],
  17: [2 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // left
  18: [3 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE],
};
