const Grid = require('./Grid');

/* TODO: Add static helper*/

module.exports = class Percolation {
  //creates a grid
  constructor(n) {
    this.grid = new Grid(n);
    this.gridSize = n;
  }

  // opens the site (row, col) if it is not open already
  open(row, col) {
    let node = this._findNode(row, col);
    if (!node.open) {
      node.open = true;
      this.grid.openNodes++;

      if (node.root === 0) {
        node.full = true;
      }

      this.isFull(node) ? (node.full = true) : console.log("node wasn't full");
    }
    // else {
    //   throw new Error(`Node[${node.row}, ${node.col}] is already open`);
    // }
  }

  union(node1, node2) {
    if (node1.root === node2.root) return;
    if (node1.size < node2.size) {
      node1.root = node2.root;
      node2.size += node1.root;
    } else {
      node2.root = node1.root;
      node1.size += node2.root;
    }
  }

  isFull(node) {
    if (node.open === false) {
      return false;
    }

    if (node.full) {
      return true;
    }
    console.log(node);
    //check if top row if yes then full
    if (node.row === 0 && node.open) {
      node.full === true;
      return true;
    }

    let nodeAbove = this._nodeAbove(node.row, node.col);
    let nodeLeft, nodeRight;

    if (node.row > 0) {
      nodeLeft = this._nodeLeft(node.row, node.col);
    }
    if (node.row < this.gridSize) {
      nodeRight = this._nodeRight(node.row, node.col);
    }

    if (nodeAbove.full) {
      this.union(node, nodeAbove);
      console.log(`NODE ABOVE CHECK ${nodeAbove}`);
      return true;
    }

    if (nodeLeft && nodeLeft.full) {
      console.log(`NODE LEFT CHECK ${nodeLeft}`);
      this.union(node, nodeLeft);

      return true;
    }
    if (nodeRight && nodeRight.full) {
      this.union(node, nodeRight);
      console.log(`NODE RIGHT CHECK ${nodeRight}`);
      return true;
    }

    console.log('nothing true');

    return false;
  }

  // returns the number of open sites

  numberOfOpenSites() {
    return this.grid.openNodes;
  }

  // does the system percolate?
  percolates() {
    //Does an individual node on the bottom row touch full nodes all the way to the top

    for (let i = 0; i < this.gridSize; i++) {
      let checkNode = this._findNode(this.gridSize - 1, i);
      console.log(checkNode);
      if (this.isFull(checkNode)) {
        console.log('IT PERCOLATES~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        return true;
      }
    }

    return false;
  }

  _print() {
    this.grid ? this.grid.print() : console.log('no grid');
  }

  _findNode(row, col) {
    console.log(`Find node called for ${row}, ${col}`);
    if (
      row >= 0 &&
      row <= this.gridSize - 1 &&
      col >= 0 &&
      col <= this.gridSize - 1
    ) {
      return this.grid.nodes[this._findNodeNumber(row, col)];
    }
  }

  _findNodeNumber(row, col) {
    return row * this.gridSize + col;
  }

  _nodeAbove(row, col) {
    return this._findNode(row - 1, col);
  }

  _nodeBelow(row, col) {
    return this._findNode(row + 1, col);
  }

  _nodeLeft(row, col) {
    return this._findNode(row, col - 1);
  }

  _nodeRight(row, col) {
    return this._findNode(row, col + 1);
  }
};
