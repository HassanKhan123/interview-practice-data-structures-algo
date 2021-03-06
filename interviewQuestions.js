// Given 2 arrays, create a function that let user knows (true/false) whether 2 arrays contains common items
// Example:
// const array1 = ['a','b','c','d']
// const array2 = ['z','y','i']
// should return false

// const array1 = ['a','b','c','x']
// const array2 = ['z','y','x']
// should return true

// 2 parameters (arrays) -- no size limit
// returns boolean

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) return true;
//     }
//   }

//   return false;
// }

// containsCommonItem(array1, array2); // O(m*n)

function containsCommonItem(arr1, arr2) {
  let obj = {};
  arr1.forEach(ar => {
    if (!obj[ar]) {
      obj[ar] = true;
    }
  });
  arr2.map(ar => {
    if (obj[ar]) {
      return true;
    }
  });

  return false;
}

containsCommonItem(array1, array2); // O(m+n)

function containsCommonItem2(arr1, arr2) {
  return arr1.some(ar => arr2.includes(ar));
}

const res = containsCommonItem2(array1, array2); // O(m+n)
console.log(res);
