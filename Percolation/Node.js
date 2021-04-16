module.exports = class Node {
  row;
  col;
  isOpen;
  isFull;
  root;
  size;

  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.isOpen = false;
    this.isFull = false;
    this.topRow = row === 0;
  }

  setFull() {
    if (this.isOpen) {
      this.isFull = true;
    } else {
      throw new Error(`This node is blocked`);
    }
  }

  _print() {
    return `row: ${this.row}, col: ${this.col}, isOpen: ${this.isOpen}, topRow: ${this.topRow}`;
  }
};
