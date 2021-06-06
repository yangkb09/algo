//https://www.algoexpert.io/questions/First%20Duplicate%20Value

// ** SOLUTION TWO **
// modify input array to track what nums we've already seen

// TIME & SPACE
  // time: o(n) where n is length of input array
  // space: o(1)

// CODE
function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
		let absValue = Math.abs(array[i]); //we're using this for idx, don't want a neg idx
		if (array[absValue - 1] < 0) {
			return absValue;
		}
		array[absValue - 1] *= -1; //must be *=
	}
  return -1;
}

// APPROACH
  /*
    map seen integers to indices in the array

    iterate through array
    for each num, find abs value and subtract 1 to find the idx to map to
      go to that idx, if the num there is neg => return curNum
      else (not neg), make num negative to indicate we've now seen curNum


  */

// NOTES
  /*
    pay attention to prompt: it says we CAN modify input array, and integers are between 1 and n
      ask why are values betwen 1 and n? => they can be mapped to an idx in the input array

    why can't we switch ln 14 - 16 with 7?
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

