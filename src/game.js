export default class Game {
  constructor({ world, view, levels }) {
    this.world = world;
    this.view = view;
    this.levels = levels;
    
    this.loop = this.loop.bind(this);

    this.activeKeys = new Set();
    this.isMoving = false;
  }

  async init() {
    this.view.init();
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'Space':
        case 'Enter':
          event.preventDefault();
          this.activeKeys.add(event.code);
        default:
          console.log('keydown', event.code);
          break;
      }
      this.key = event.code;
    });

    document.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'Space':
        case 'Enter':
          event.preventDefault();
          this.activeKeys.delete(event.code);
        default:
          console.log('keyup', event.code);
          break;
      }
      this.key = '';
    });
  }

  start() {
    requestAnimationFrame(this.loop);
  }

  loop() {
    this.world.update(this.activeKeys);
    this.view.update(this.world);
    requestAnimationFrame(this.loop);
  }
}
