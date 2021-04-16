const Grid = require('./Grid');

module.exports = class Percolation {
  //creates a grid
  constructor(n, randomVal) {
    this.grid = new Grid(n, randomVal);
    this.gridSize = n;
  }

  // opens the site (row, col) if it is not open already
  open(row, col) {
    
    let node = this._findNode(row, col);
    if (this.isOpenFast(row, col) === false) {
      node.isOpen = true;
    } else {
      throw new Error(`Node[${node.row}, ${node.col}] is already open`);
    }
    console.log(`Node: ${node.row}, ${node.col}`);
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

  isOpenFast(row, col) {
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

  // is the site (row, col) "connected to the top row"?
  // currently recurse your way straight up to check for connection
  isFull(row, col) {
    if (row < 0 || col > this.gridSize) {
      return new Error(`Row or Column out of bounds`);
    }

    let currentNode = this._findNode(row, col);

    if (row === 0) {
      return currentNode.isOpen;
    }

    let nodeAbove = this._nodeAbove(row, col);
    if (currentNode.isOpen && row === 0) {
      console.log(`Current Node Open: ${currentNode.isOpen}, Row: ${row}`);

      return true;
    }

    if (nodeAbove.isOpen === false) {
      return false;
    }

    return this.isFull(nodeAbove.row, nodeAbove.col);
  }

  // returns the number of open sites
  numberOfOpenSites() {
    return this.grid.openNodes;
  }

  // does the system percolate?
  percolates() {

    //Does an individual node on the bottom row touch full nodes all the way to the top

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

    // let nodeLeft = this._findNode(row, col - 1);

    // let nodeRight = this._findNode(row, col + 1);

    // let nodeBelow = this._findNode(row + 1, col);

    // nodeAbove.isOpen;
    // nodeBelow.isOpen;
    // nodeLeft.isOpen;
    // nodeRight.isOpen;
  }
};
