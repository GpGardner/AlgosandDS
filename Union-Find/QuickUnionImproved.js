//lg N
//this might be better illustrated with 2 Arrays

class QuickUnionImproved {
  constructor(nodeArray) {
    this.nodeArray = nodeArray;
  }

  //boolean
  connected(pos1, pos2) {
    console.log('Connected:');
    console.log(this.nodeArray[pos1.value]);
    console.log(this.nodeArray[pos2.value]);
    return this.nodeArray[pos1] === this.nodeArray[pos2];
  }

  //void
  //Modify the union method to adjust the root node of the smaller tree
  //this makes the tree height reduced to basically a max of 5
  union(pos1, pos2) {
    if (pos1.root === pos2.root) return;
    if (pos1.size < pos2.size) {
      pos1.root = pos2.root;
      pos2.size += pos1.root;
    } else {
      pos2.root = pos1.root;
      pos1.size += pos2.root;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.root = value;
    this.size = 0;
  }

  setRoot(root) {
    this.root = root.value;
  }
}

let nodeArray = [];

for (let i = 0; i < 10; i++) {
  let tempNode = new Node(i);
  nodeArray.push(tempNode);
}

let union = new QuickUnionImproved(nodeArray);
union.union(nodeArray[1], nodeArray[2]);

union.union(nodeArray[2], nodeArray[3]);
console.log(nodeArray);
union.union(nodeArray[5], nodeArray[2]);
console.log(nodeArray);
union.union(nodeArray[5], nodeArray[1]);
console.log(nodeArray);
union.union(nodeArray[0], nodeArray[1]);
console.log(nodeArray);
union.union(nodeArray[4], nodeArray[0]);
console.log(nodeArray);
