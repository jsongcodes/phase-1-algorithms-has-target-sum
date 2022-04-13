function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}
// Write your algorithm here
// const arrayInOrder = array.sort();
// const half = Math.ceil(arrayInOrder.length / 2);
// const firstHalf = arrayInOrder.splice(0, half)
// const secondHalf = arrayInOrder.splice(-half)
// for (let i = 0; i < firstHalf.length; i++) {
//   for (let j = 0; j < secondHalf.length; j++) {
//     if (firstHalf[i] + secondHalf[j] === target) {
//       return true
//     }
//     else { return false }
//   }
// }
// if (firstHalf[0] + secondHalf[secondHalf.length] === target){
//   return true
// }
// else (fi)


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
// put the array in numerical order
cut the array in half
if the index0 number from arrayA and the index[array.length] number from arrayB === target, return true
if the next index number and the index[array.length-1] number === target, return true
so on and so forth

/*
  Add written explanation of your solution here
*/









// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
