class Solution {
  constructor(...originalArray) {
    this.arr = originalArray;
  }

  unPairedElement() {
    let newArr = [];
    const hashMap = new Map();
    for (let i = 0; i < this.arr.length; i++) {
      if (hashMap.has(this.arr[i])) {
        // if the key exists in the hashmap, increment the value by 1
        let value = hashMap.get(this.arr[i]);
        value = value + 1;
        hashMap.delete(this.arr[i]);
        hashMap.set(this.arr[i], value);
      } else {
        // if the key doesn't  exist in the hashmap, set the value to 1
        hashMap.set(this.arr[i], 1);
      }
    }

    hashMap.forEach((value, key) => {
      if (value % 2 !== 0) {
        // if the value is not divisible by 2, push the key into the newArr
        newArr.push(key);
      }
      console.log();
    });

    return newArr;
  }
}

let arr = [9, 3, 9, 3, 9, 7, 9];
let soln = new Solution(...arr);
let returnValue = soln.unPairedElement();
console.log(`Unpaired element : ${returnValue}`);
