module.exports = class Node {
  row;
  col;
  open;
  full;
  root;
  size;

  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.open = false;
    this.full = false;
    this.size = 1;

    //find out if the node is in the top row, 
    //the top row is considered one root node for this example
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
    return `row: ${this.row}, col: ${this.col} root: ${root}, size: ${size}`;
  }
};
