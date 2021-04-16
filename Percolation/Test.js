const Percolation = require('./Percolation');

// const perc = new Percolation(4, 0);
// console.log(perc.isOpenFast(0, 1));
// console.log(perc.numberOfOpenSites());
// perc._print();
// perc.open(0, 1);
// perc.open(1, 1);
// perc.open(2, 1);
// perc.open(3, 1);
// perc._findNode(0, 1)._print();
// perc._print();
// console.log(` Does this percolate? : ${perc.isFull(3, 3)}`);

const perc = new Percolation(3, 0);
console.log(perc.isOpenFast(0, 1));
console.log(perc.numberOfOpenSites());
perc._print();
perc.open(0, 1);
perc.open(1, 1);
perc.open(2, 1);
perc._findNode(0, 1)._print();
perc._print();
console.log(` Is this full? : ${perc.isFull(2, 0)}`);
