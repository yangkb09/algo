//https://leetcode.com/problems/two-sum/

// ** SOLUTION ONE **
// hash to store seen values, check if difference is in hash (seen)

// TIME & SPACE
  // time: o(n) where n is length of array
  // space: o(n)

// CODE
var twoSum = function(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
      let curNum = nums[i];
      let difference = target - curNum;

      if (hash[difference] >= 0) { //must be >= 0 because 0 is falsey
          return [hash[difference], i]
      }
      hash[curNum] = i;
  }
};

// ** SOLUTION TWO **
// nested for loop

// TIME & SPACE
  // time: o(n^2) where n is length of array
  // space: o(1)

// CODE
    for (let i = 0; i < nums.length; i++) {
      let leftNum = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
          let rightNum = nums[j];
          if (leftNum + rightNum === target) {
              return [i, j];
          }
      }
    }
// APPROACH
  /*
    input: array, targetSum; output: 2 idxes

    edge cases:
    repeating numbers
    [4, 4, 1] => [0, 1]

    brute force:
      nested for loop
    optimized:
      init hash

      iterate through nums arr
          find difference we're looking for (target - curNum)
          if hash[diff] exists
              return hash[diff], i
          else,
              hash[curNum] = i
  */

// NOTES
  /*
    if (hash[difference] >= 0) { //must be >= 0 because 0 is falsey
  */
