const Percolation = require('./Percolation');
const colors = require('colors/safe');

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

const perc = new Percolation(4, 0);
// console.log(perc._isOpen(0, 1));
// console.log(perc.numberOfOpenSites());
// perc._print();
perc.open(0, 0);
perc.open(1, 0);
perc.open(1, 1);
// perc.open(1, 2);
perc.open(1, 3);

perc._print();

perc.grid.nodes.forEach((node) => {
  let string = node._print();
  perc.isFull(node.row, node.col)
    ? console.log(colors.green(string))
    : console.log(colors.red(string));
});
