//https://leetcode.com/problems/single-number/submissions/

// ** SOLUTION ONE **
// iterate through arr and xor each num

// TIME & SPACE
  // time: o(n)
  // space: o(1)

// CODE
var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0];

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
      result ^= nums[i];
  }
  return result;
};

// ** SOLUTION TWO **
// hash to store each num, iterate over hash

// TIME & SPACE
  // time: o(n)
  // space: o(n)

// CODE
var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0];

  let hash = {};

  for (let i = 0; i < nums.length; i++) {
      let leftNum = nums[i];
      hash[leftNum] = (hash[leftNum] || 0) + 1
  }

  for (let num in hash) {
      if (hash[num] === 1) {
          return num;
      }
  }
};
// APPROACH
  /*
    input: ; output:

    examples:

    edge cases:

    brute force:

    optimized:

  */

// NOTES
  /*
    xor is cool, cancels out the same nums
  */
