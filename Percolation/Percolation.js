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
    } else {
      throw new Error(`Node[${node.row}, ${node.col}] is already open`);
    }
  }

  union(pos1, pos2) {
    if (pos1.root === pos2.root) return;
    if (pos1.size < pos2.size) {
      pos1.root = pos2.root;
      pos2.size += pos1.root;
    } else {
      pos2.root = pos1.root;
      pos1.size += pos2.root;
    }
  }

  isFull(row, col) {
    if (row < 0 || col > this.gridSize) {
      return new Error(`Row or Column out of bounds`);
    }

    let currentNode = this._findNode(row, col);

    if (currentNode.open === false) {
      // console.log(`${currentNode._printFull()}`);
      return false;
    }

    if (currentNode.full) {
      return true;
    }

    //check if top row if yes then full
    if (row === 0 && currentNode.open) {
      currentNode.full === true;
      return true;
    }

    let nodeAbove = this._nodeAbove(row, col);
    let nodeLeft, nodeRight;

    if (row > 0) {
      nodeLeft = this._nodeLeft(row, col);
    }
    if (row < this.gridSize) {
      nodeRight = this._nodeRight(row, col);
    }

    if (nodeAbove.full) {
      return true;
    }

    if (nodeLeft) {
      return nodeLeft.full;
    }
    if (nodeRight) {
      return nodeRight.full;
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
      if (this._findNode(this.gridSize - 1, i).full) {
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
