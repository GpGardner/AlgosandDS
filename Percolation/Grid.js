const Node = require('./Node');

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

  union(nodeNumber1, nodeNumber2) {
    if (nodeNumber1.root === nodeNumber2.root) return;
    if (nodeNumber1.size < nodeNumber2.size) {
      nodeNumber1.root = nodeNumber2.root;
      nodeNumber2.size += nodeNumber1.root;
    } else {
      nodeNumber2.root = nodeNumber1.root;
      nodeNumber1.size += nodeNumber2.root;
    }
  }

  print() {
    let string = '';
    let count = 0;
    let color = '';
    this.nodes.forEach((node) => {
      node.isOpen ? (color = '\u001b[1;32m') : (color = '\u001b[1;31m');
      string += `${color} [${node.row}, ${node.col}]`;
      count++;
      if (count === this.columns) {
        console.log(string);
        string = '';
        count = 0;
      }
    });
  }
};
