const Grid = require('./Grid');

class Percolation {
  //creates a grid
  constructor(n, randomVal) {
    this.grid = new Grid(n, randomVal);
    this.gridSize = n;
  }

  // opens the site (row, col) if it is not open already
  open(row, col) {
    let node = this.grid.nodes[row * this.gridSize + col];
    if (this.isOpenFast(row, col) === false) {
      node.isOpen = true;
    }
    console.log(`Node: ${node.row}, ${node.col} `);
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
    return this.grid.nodes[row * this.gridSize + col].isOpen;
  }

  // is the site (row, col) "connected to the top row"?
  isFull(row, col) {}

  // returns the number of open sites
  numberOfOpenSites() {
    return this.grid.openNodes;
  }

  // does the system percolate?
  percolates() {}

  print() {
    this.grid ? this.grid.print() : console.log('no grid');
  }
}

const perc = new Percolation(8, 0.1);
console.log(perc.isOpenFast(1, 2));
console.log(perc.numberOfOpenSites());
perc.print();
perc.open(1, 2);
perc.print();
