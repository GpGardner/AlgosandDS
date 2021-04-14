const Grid = require('./Grid');

class Percolation {
  //creates a grid
  constructor(n) {
    this.grid = new Grid(n);
  }

  // opens the site (row, col) if it is not open already
  open(row, col) {}

  // is the site (row, col) open?
  isOpen(row, col) {}

  // is the site (row, col) full?
  isFull(row, col) {}

  // returns the number of open sites
  numberOfOpenSites() {}

  // does the system percolate?
  percolates() {}

  print() {
    this.grid ? this.grid.print() : console.log('no grid');
  }
}

const perc = new Percolation(8);
perc.print();
