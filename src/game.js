class Game {
  constructor() {
    this.frames = [new Frame(new Roll(-1), new Roll(-1))];
    this.currentFrame = 0;
  }

  nextFrame() {
    this.currentFrame += 1;
  }
}