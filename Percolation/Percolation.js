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
    if (this._isOpen(row, col) === false) {
      node.open = true;
      this.grid.openNodes++;

      if (node.root === 0) {
        node.full = true;
      }

      this.isFull2(row, col);
    } else {
      console.log(` ${(row, col)}: Already open`);
    }
    // else {
    //   throw new Error(`Node[${node.row}, ${node.col}] is already open`);
    // }
  }

  // is the site (row, col) "connected to the top row"?
  // currently recurse your way straight up to check for connection
  isFull(row, col) {
    //check inbounds
    if (row < 0 || col > this.gridSize) {
      return new Error(`Row or Column out of bounds`);
    }

    let currentNode = this._findNode(row, col);

    if (currentNode.open) {
      //check if top row if yes then full
      if (row === 0) {
        return true;
      }

      let nodeAbove = this._nodeAbove(row, col);
      let nodeLeft = this._nodeLeft(row, col);
      let nodeRight = this._nodeRight(row, col);

      if (nodeAbove.full || nodeLeft.full || nodeRight.full) {
        return true;
      }

      if (nodeAbove.open && this.isFull(nodeAbove.row, nodeAbove.col)) {
        return true;
      }

      if (nodeAbove.full)
        if (nodeLeft.open && this.isFull(nodeLeft.row, nodeLeft.col)) {
          return true;
        }
      if (nodeRight.open && this.isFull(nodeRight.row, nodeRight.col)) {
        return true;
      }
    }

    return false;
  }

  // union(nodeNumber1, nodeNumber2) {
  //   if (nodeNumber1.root === nodeNumber2.root) return;
  //   if (nodeNumber1.size < nodeNumber2.size) {
  //     nodeNumber1.root = nodeNumber2.root;
  //     nodeNumber2.size += nodeNumber1.root;
  //   } else {
  //     nodeNumber2.root = nodeNumber1.root;
  //     nodeNumber1.size += nodeNumber2.root;
  //   }
  // }

  isFull2(row, col) {
    if (row < 0 || col > this.gridSize) {
      return new Error(`Row or Column out of bounds`);
    }

    let currentNode = this._findNode(row, col);

    if (currentNode.open === false) {
      console.log(`${currentNode._printFull()}`);
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
      if (this.isFull(this.gridSize - 1, i)) {
        return true;
      }
    }

    return false;
  }

  _isOpen(row, col) {
    //faster implementation then looping through array
    let nodeNumber = this._findNodeNumber(row, col);
    if (nodeNumber < this.gridSize * this.gridSize) {
      return this.grid.nodes[nodeNumber].open;
    } else {
      console.log(nodeNumber);
      throw new RangeError(
        `The values for row and col should be within the bound of ${this.gridSize}, ${this.gridSize}`
      );
    }
  }

  _print() {
    this.grid ? this.grid.print() : console.log('no grid');
  }

  _findNode(row, col) {
    return this.grid.nodes[this._findNodeNumber(row, col)];
  }

  _findNodeNumber(row, col) {
    return row * this.gridSize + col;
  }

  _nodeAbove(row, col) {
    let nodeAbove = this._findNode(row - 1, col);
    return nodeAbove;
  }

  _nodeLeft(row, col) {
    let nodeLeft = this._findNode(row, col - 1);
    return nodeLeft;
  }

  _nodeRight(row, col) {
    let nodeRight = this._findNode(row, col + 1);
    return nodeRight;
  }
};
