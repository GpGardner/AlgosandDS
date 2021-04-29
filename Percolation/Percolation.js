const Grid = require('./Grid');

/* TODO: Add static helper*/

module.exports = class Percolation {
  //creates a grid
  constructor(n) {
    this.grid = new Grid(n);
    this.gridSize = n;
  }

  // opens the site (row, col) if it is not open already
  open(row, col) {
    let node = this._findNode(row, col);
    if (!node.open) {
      node.open = true;
      this.grid.openNodes++;
    }
  }

  //look at two nodes, both open? link them
  union(node1, node2) {
    if (node1.open && node2.open) {
      console.log(
        `about to open up ${(node1.row, node1.col)}, ${(node1.row, node2.col)} `
      );
      if (node1.root === node2.root) return;

      if (node1.root === 0 || node2.root === 0) {
        node1.root = 0;
        node2.root = 0;
      }

      if (node1.size < node2.size) {
        node1.root = node2.root;
        node2.size += node1.root;
      } else {
        node2.root = node1.root;
        node1.size += node2.root;
      }
    }
  }

  //created spaghetti code, refactoring
  checkFull(row, col) {
    let node = this._findNode(row, col);
    if (node.open === false) {
      return false;
    }

    if (node.full) {
      return true;
    }

    if (node.row === 0 && node.open) {
      node.full = true;
      return true;
    }
    let nodeUp = this._nodeAbove(node.row, node.col);

    let nodeLeft, nodeRight, nodeDown;
    // let answer;

    if (node.row > 0) {
      nodeLeft = this._nodeLeft(node.row, node.col);
    }
    if (node.row < this.gridSize) {
      nodeRight = this._nodeRight(node.row, node.col);
    }
    if (node.col < this.gridSize) {
      nodeDown = this._nodeBelow(node.row, node.col);
    }

    if (nodeUp) {
      console.log(
        `NODE ABOVE CHECK ${nodeUp.row}, ${nodeUp.col} - ${nodeUp.full}`
      );
      if (nodeUp.full) {
        node.full = true;
        this.answer = true;
      }
    }

    if (nodeLeft) {
      console.log(`NODE LEFT CHECK ${nodeLeft.row}, ${nodeLeft.col}`);
      if (nodeLeft.full) {
        node.full = true;
        this.answer = true;
      }
    }

    if (nodeRight) {
      console.log(`NODE RIGHT CHECK ${nodeRight.row}, ${nodeRight.col}`);
      if (nodeRight.full) {
        node.full = true;
        this.answer = true;
      }
    }

    if (nodeDown) {
      console.log(`NODE BOTTOM CHECK ${nodeDown.row}, ${nodeDown.col}`);
      if (nodeDown.full) {
        node.full = true;
        this.answer = true;
      }
    }
  }

  // returns the number of open sites

  numberOfOpenSites() {
    return this.grid.openNodes;
  }

  // does the system percolate?
  percolates() {
    //Does an individual node on the bottom row touch full nodes all the way to the top

    for (let i = 0; i < this.gridSize; i++) {
      let checkNode = this._findNode(this.gridSize - 1, i);
      // console.log(checkNode);
      if (this.checkFull(checkNode)) {
        console.log('IT PERCOLATES~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        return true;
      }
    }

    return false;
  }

  _print() {
    this.grid ? this.grid.print() : null;
  }

  _findNode(row, col) {
    if (
      row >= 0 &&
      row <= this.gridSize - 1 &&
      col >= 0 &&
      col <= this.gridSize - 1
    ) {
      return this.grid.nodes[this._findNodeNumber(row, col)];
    }
  }

  _findNodeNumber(row, col) {
    return row * this.gridSize + col;
  }

  _nodeAbove(row, col) {
    return this._findNode(row - 1, col);
  }

  _nodeBelow(row, col) {
    return this._findNode(row + 1, col);
  }

  _nodeLeft(row, col) {
    return this._findNode(row, col - 1);
  }

  _nodeRight(row, col) {
    return this._findNode(row, col + 1);
  }
};
