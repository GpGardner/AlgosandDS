const Grid = require('./Grid');

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
      node.isOpen = true;
      this.grid.openNodes++;
    } else {
      throw new Error(`Node[${node.row}, ${node.col}] is already open`);
    }
  }

  /*
  // is the site (row, col) open?
  isOpenSlow(row, col) {
    //Check if [row, col] isOpen
    let isOpen = false;

    //this version will loop over the entire array.
    //I can use math to find the specific entity in the array;
    this.grid.nodes.filter((node) => {
      if (row === node.row) {
        if (col === node.col) {
          isOpen = node.isOpen;
        }
      }
    });
    return isOpen;
  }
  */

  // is the site (row, col) "connected to the top row"?
  // currently recurse your way straight up to check for connection
  isFull(row, col) {
    //check inbounds
    if (row < 0 || col > this.gridSize) {
      return new Error(`Row or Column out of bounds`);
    }

    //grab current
    let currentNode = this._findNode(row, col);

    //check if top row if yes then full
    if (row === 0) {
      return currentNode.isOpen;
    }

    //check if above is top row

    if (currentNode.isOpen) {
      let nodeAbove = this._nodeAbove(row, col);
      let nodeLeft = this._nodeLeft(row, col);
      let nodeRight = this._nodeRight(row, col);

      if(nodeAbove.isOpen && this.isFull(nodeAbove.row, nodeAbove.col)){
        return true;
      }
      if (nodeLeft.isOpen && this.isFull(nodeLeft.row, nodeLeft.col)) {
        return true;
      }
      if (nodeRight.isOpen && this.isFull(nodeRight.row, nodeRight.col)) {
        return true;
      }
      

      // return this.isFull(nodeAbove.row, nodeAbove.col);
    }

    return false;
  }

  // returns the number of open sites
  numberOfOpenSites() {
    return this.grid.openNodes;
  }

  // does the system percolate?
  percolates() {
    //Does an individual node on the bottom row touch full nodes all the way to the top
  }

  _isOpen(row, col) {
    //faster implementation then looping through array
    let nodeNumber = this._findNodeNumber(row, col);
    if (nodeNumber < this.gridSize * this.gridSize) {
      return this.grid.nodes[nodeNumber].isOpen;
    } else {
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
