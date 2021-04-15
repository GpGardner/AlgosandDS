module.exports = class Node {
  constructor(row, col, isOpen) {
    this.row = row;
    this.col = col;
    this.isOpen = isOpen;
  }

  _print() {
    console.log(`row: ${this.row}, col: ${this.col}, isOpen: ${this.isOpen}`);
  }
};
