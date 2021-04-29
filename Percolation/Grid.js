const Node = require('./Node');
const colors = require('colors/safe');

module.exports = class Grid {
  nodes = [];
  openNodes = 0;
  rows = 0;
  columns = 0;

  constructor(n) {
    for (let i = 0; i < n; i++) {
      this.rows++;
      for (let j = 0; j < n; j++) {
        if (j === 0) {
          this.columns++;
        }
        this.nodes.push(new Node(i, j));
      }
    }
  }

  print() {
    let string = '';
    let count = 0;
    this.nodes.forEach((node) => {
      string += node.open
        ? node.full
          ? colors.green(`[${node.row}, ${node.col} - ${node.root || 0}]`)
          : colors.white(`[${node.row}, ${node.col} - ${node.root || 0}]`)
        : colors.red(`[${node.row}, ${node.col} - ${node.root || 0}]`);
      count++;
      if (count === this.columns) {
        console.log(string);
        string = '';
        count = 0;
      }
    });
  }
};
