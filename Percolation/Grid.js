const Node = require('./Node');

module.exports = class Grid {
  nodes = [];
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
    let color = '';
    this.nodes.forEach((node) => {
      node.isOpen = Math.random() < 0.5;
      node.isOpen ? (color = '\u001b[1;32m') : (color = '\u001b[1;31m');

      string += `${color} [${node.x}, ${node.y}]`;

      count++;
      if (count === this.columns) {
        console.log(string);
        string = '';
        count = 0;
      }
    });
  }
};
