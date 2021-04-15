const Grid = require('./Grid');

class Percolation {
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
    let node = this._findNodeNumber(row, col);
    if (node < this.gridSize * this.gridSize) {
      return this.grid.nodes[node].isOpen;
    } else {
      throw new RangeError(
        `The values for row and col should be within the bound of ${this.gridSize}, ${this.gridSize}`
      );
    }
  }

  // is the site (row, col) "connected to the top row"?
  isFull(row, col) {
    //recurse until we find no open nodes, or reach the top row
  }

  // returns the number of open sites
  numberOfOpenSites() {
    return this.grid.openNodes;
  }

  // does the system percolate?
  percolates() {}

  _print() {
    this.grid ? this.grid.print() : console.log('no grid');
  }

  _findNode(row, col) {
    return this.grid.nodes[row * this.gridSize + col];
  }

  _findNodeNumber(row, col) {
    return row * this.gridSize + col;
  }

  _checkDirection(row, col) {
    let nodeAbove = this._findNode(row - 1, col);

    let nodeBelow = this._findNode(row + 1, col);

    let nodeLeft = this._findNode(row, col - 1);

    let nodeRight = this._findNode(row, col + 1);

    nodeAbove.isOpen;
    nodeBelow.isOpen;
    nodeLeft.isOpen;
    nodeRight.isOpen;
  }
}

const perc = new Percolation(3, 0);
console.log(perc.isOpenFast(0, 1));
console.log(perc.numberOfOpenSites());
perc._print();
perc.open(0, 1);
perc.open(1, 1);
perc.open(2, 1);
perc._print();
perc._checkDirection(1, 1);
