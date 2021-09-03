//https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

// ** SOLUTION ONE **
// left pointer, right pointer using for loop, rewrite values (don't have to swap)

// TIME & SPACE
  // time: o(n), n is length of input array
  // space: o(1)

// CODE
var removeDuplicates = function(nums) {
  let left = 0;

  for (let i = 1; i < nums.length; i++) {
      let rightNum = nums[i];
      let leftNum = nums[left];
      if (rightNum !== leftNum) {
          nums[left + 1] = rightNum;
          left++;
      }
  }
  return left + 1;
};

// APPROACH
  /*
    input: array; output: number of unique elements

    example:
    [0] => 1
    [3, 3, 4, 6] => 3

    edge case: array of length 1, return 1

    approach:
    initialize left pointer

    iterate through nums arr starting at idx 1
        rigthNum = nums[i]
        if rightNum doesnt equal leftNum (swap)
            nums[leftP + 1] = rightNum

    return left + 1

    note: modify in place
  */

// NOTES
  /*

  */
