//Considered the "eager" approach
//At most 2N+2 array accesses

class QuickFindUF {
  constructor(idArray) {
    this.idArray = idArray;
  }

  //boolean
  connected(num1, num2) {
    return num1 === num2;
  }

  //void
  union(num1, num2) {
    const num1ID = this.idArray[num1];
    const num2ID = this.idArray[num2];

    for (let i = 0; i < this.idArray.length; i++) {
      console.log(`Num1: ${num1ID}`);
      console.log(`Num2: ${num2ID}`);
      console.log(`idArray[1]: ${this.idArray[i]}`);

      if (this.idArray[i] === num1ID) {
        console.log('true');
        this.idArray[i] = num2ID;
        console.log(this.idArray);
      }
    }
  }
}

let Union = new QuickFindUF([0, 1, 2, 3, 4, 5]);
Union.union(0, 1);
Union.union(1, 5);

console.log(Union);
console.log(Union.connected(Union.idArray[0], Union.idArray[5]));
