//https://www.algoexpert.io/questions/First%20Duplicate%20Value

// ** SOLUTION TWO **
//

// TIME & SPACE
  // time:
  // space:

// CODE


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


// ** SOLUTION ONE **
// hash table

// TIME & SPACE
  // time: o(n) where n is length of input array
  // space: o(n)

// CODE
function firstDuplicateValue(array) {
  let seen = {};

	for (let i = 0; i < array.length; i++) {
		let curNum = array[i];
		if (seen[curNum]) {
			return curNum;
		} else {
			seen[curNum] = (seen[curNum] || 0) + 1;
		}
	}
  return -1;
}

// APPROACH
  /*
    input: array of integers; output: integer (first int that appears more than once), or -1 if no duplicate

    examples: [3, 5, 1, 2, 5, 4, 3] => 5

    edge cases: n/a

    brute force: nested for loop to check every pair, variable to hold pair with lowest second idx

    second-best optimized:
    initialize hash table to track seen integers
    iterate through array
    if curNum exists in the hash table, return curNum
    else, add it to the hash table

    return -1 if we get to the end of the for loop without returning

  */

// NOTES
  /*
    for first solution, why doesn't if (seen[curNum] === null) work?

    function firstDuplicateValue(array) {
      let seen = {};

    	for (let i = 0; i < array.length; i++) {
    		let curNum = array[i];
    		if (seen[curNum] === null) { //why doesnt this syntax work?
    			seen[curNum] += 1;
    		} else {
    			return i;
    		}
    	}
      return -1;
    }
  */

