module.exports = class Node {
  row;
  col;
  isOpen;
  isFull;

  constructor(row, col, isOpen) {
    this.row = row;
    this.col = col;
    this.isOpen = isOpen;
    this.isFull = false;
  }

  setFull() {
    if (this.isOpen) {
      this.isFull = true;
    } else {
      throw new Error(`This node is blocked`);
    }
  }

  _print() {
    console.log(`row: ${this.row}, col: ${this.col}, isOpen: ${this.isOpen}`);
  }
};
