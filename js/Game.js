"use strict";

class Game {
  #elements;

  constructor(num) {
    this.#elements = num;
  }

  get getElements() {
    return this.#elements;
  }

  renderGame() {
    let i = 1;
    while (i <= this.getElements) {
      new DragAndDrop(`drag-${i}`, `drop-zone-${i}`);
      i++;
    }
  }
}
