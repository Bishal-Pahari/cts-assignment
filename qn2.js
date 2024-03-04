class Solution {
  constructor(...arr) {
    this.arr = arr;
  }

  smallestPositiveInteger() {
    let smallestPositiveInt = 1;
    let greatest = 0;

    for (let i = 0; i < this.arr.length; i++) {
      // find the greatest number in the array
      if (this.arr[i] > greatest) {
        greatest = this.arr[i];
      }
    }

    if (greatest <= 0) {
      // if the greatest number is 0 or negative, return 1
      return smallestPositiveInt;
    } else {
      for (let i = 0; i < this.arr.length; i++) {
        for (let j = 1; j <= greatest; j++) {
          // loop through the numbers from 1 to the greatest number
          if (!this.arr.includes(j)) {
            // if the number is not in the array, return it
            smallestPositiveInt = j;
            return smallestPositiveInt;
          }
        }
      }
    }
    smallestPositiveInt = greatest + 1;
    return smallestPositiveInt;
  }
}

let arr = [1, 2, 3, 4];
let soln = new Solution(...arr);
let returnValue = soln.smallestPositiveInteger();
console.log(`Smallest positive integer: ${returnValue}`);
