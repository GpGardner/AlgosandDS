const Percolation = require('./Percolation');
const colors = require('colors/safe');

const perc = new Percolation(4);
let width = perc.gridSize - 1;

function randNum() {
  return Math.round(Math.random() * width);
}

perc.open(0, 3);
perc.checkFull(0, 3);
perc.open(1, 3);
perc.checkFull(1, 3);
perc._print();

// perc.open(2, 1);

// perc._print();

// setInterval(() => {
//   let rand1 = randNum();
//   let rand2 = randNum();
//   perc.percolates();
//   console.log(`START - Random Node ${rand1}, ${rand2} `);
//   perc.open(rand1, rand2);
//   perc._print();
// }, 2000);
