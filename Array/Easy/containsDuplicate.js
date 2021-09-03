//https://leetcode.com/problems/contains-duplicate/

// ** SOLUTION ONE **
//hash

// TIME & SPACE
  // time: o(n)
  // space: o(n)

// CODE
var containsDuplicate = function(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
      let curNum = nums[i];
      if (hash[curNum]) return true;
      hash[curNum] = 1;
  }
  return false;
};

// APPROACH
  /*
    intput: arr; output: boolean

    example:
    [0] => false
    [1, 2, 1] => true

    edge case:
    array of length 1 or less

    approach:
    init hash
    iterate through array
        if exists in hash
            return true
        else, store value
  */

// NOTES
  /*

  */
