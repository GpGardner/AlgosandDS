const Grid = require('./Grid');

class Percolation {
  //creates a grid
  constructor(n, randomVal) {
    this.grid = new Grid(n, randomVal);
  }

  // opens the site (row, col) if it is not open already
  open(row, col) {}

  // is the site (row, col) open?
  isOpen(row, col) {
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

const perc = new Percolation(8, 0.5);
let answer = perc.isOpen(3, 4);
console.log(answer);
perc.print();
