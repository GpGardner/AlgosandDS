const Percolation = require('./Percolation');
const colors = require('colors/safe');

const perc = new Percolation(9);
let width = perc.gridSize - 1;

// console.log(perc._isOpen(0, 1));
// console.log(perc.numberOfOpenSites());
// perc._print();
// console.log(perc._isOpen(1, 2));
// perc.open(1, 2);
// perc.open(0, 2);
// perc._print();
// console.log(perc.ifFull2(1, 2));

function randNum() {
  return Math.round(Math.random() * width);
}

// perc.open(0, 2);
// perc.open(1, 1);
// perc.open(2, 2);
// perc.open(3, 2);
// console.log(perc._isOpen(3, 2));
// perc._print();
// console.log(`log ${perc.isFull(3, 2)}`);

// console.log(`TEST: ${perc.percolates()}`);

setInterval(() => {
  if (perc.percolates()) {
    return;
  }
  let value1 = randNum();
  let value2 = randNum();

  console.log(`Row: ${value1}, Column ${value2}`);
  if (perc._findNode(value1, value2).open === false) {
    perc.open(value1, value2);
    perc._print();
  }
}, 1000);
