//https://leetcode.com/problems/rotate-array/submissions/

// ** SOLUTION ONE **
//reverse entire array, reverse beginning of array until k-1, reverse end of array from k

// TIME & SPACE
  // time: o(n)
  // space: ?

// CODE
var rotate = function(nums, k) {
  k = k % nums.length;
  if (k === 0) return nums;

  reverseNums(nums, 0, nums.length-1)
  reverseNums(nums, 0, k-1);
  reverseNums(nums, k, nums.length-1);
};

const reverseNums = (array, start, end) => {
  while (start < end) {
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--;
  }
}

// ** SOLUTION TWO **
//iterate k times, pop and unshift

// TIME & SPACE
  // time:
  // space:

// CODE
var rotate = function(nums, k) {
  if (k === 0) return nums;

  for (let i = 0; i < k; i++) {
      let curNum = nums.pop();
      nums.unshift(curNum)
  }
  return nums;
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

  */
