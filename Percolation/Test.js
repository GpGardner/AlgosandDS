const Percolation = require('./Percolation');
const colors = require('colors/safe');

const perc = new Percolation(4);
let width = perc.gridSize - 1;

function randNum() {
  return Math.round(Math.random() * width);
}

perc.open(2, 3);
console.log('End open 1');

console.log(
  perc._nodeAbove(1, 3) //1,3
);
perc._print();
