//lazy approach

//this approach may look cleaner, but the trees can grow very tall causing
//skinny long tree
class QuickUnion {
  constructor(idArray) {
    this.idArray = idArray;
  }

  //boolean
  connected(pos1, pos2) {
    return this._root(pos1) === this._root(pos2);
  }

  //void
  //This method is fast in this version
  union(pos1, pos2) {
    let numAtPos1 = this._root(pos1);
    let numAtPos2 = this._root(pos2);
    this.idArray[numAtPos1] = numAtPos2;
  }

  //number
  _root(pos) {
    while (pos != this.idArray[pos]) pos = this.idArray[pos];
    return pos;
  }
}

let union = new QuickUnion([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
union.union(1, 2);
console.log(union.connected(1, 2));

console.log(union.connected(2, 3));
console.log(union);
union.union(9, 2);
console.log(union.connected(1, 9));
console.log(union);
console.log(union);
