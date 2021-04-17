module.exports = class Node {
  row;
  col;
  open;
  full;
  root;
  

  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.open = false;
    this.full = false;
    this.topRow = row === 0;
    this.topRow ? (this.root = 0) : null;
  }

  setFull() {
    if (this.open) {
      this.full = true;
    } else {
      throw new Error(`This node is blocked`);
    }
  }

  _print() {
    return `row: ${this.row}, col: ${this.col}`;
  }

  _printFull() {
    return `row: ${this.row}, col: ${this.col}, isOpen: ${this.open}, topRow: ${this.topRow}, root ${this.root}, size ${this.size}`;
  }
};
