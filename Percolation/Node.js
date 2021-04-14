module.exports = class Node {
  constructor(row, col, isOpen) {
    this.row = row;
    this.col = col;
    this.isOpen = isOpen;
  }
};
