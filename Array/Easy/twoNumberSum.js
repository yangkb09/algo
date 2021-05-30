//https://www.algoexpert.io/questions/Two%20Number%20Sum

// ** SOLUTION THREE **
//pointers

// time & space complexity:
  // time: o(nlog(n))
  // space: o(1)

function twoNumberSum(array, targetSum) {
	array.sort((a, b) => a - b)

	let leftPointer = 0;
	let rightPointer = array.length - 1;

	while (leftPointer < rightPointer) {
		const currentSum = array[leftPointer] + array[rightPointer];
		if (currentSum === targetSum) {
			return [array[leftPointer], array[rightPointer]]
		} else if (currentSum < targetSum) {
			leftPointer++;
		} else if (currentSum > targetSum) {
			rightPointer--;
		}
	}
	return [];
}

// ** SOLUTION TWO **
// hash table

// time & space complexity:
  // o(n) for both, where n is length of array

function twoNumberSum(array, targetSum) {
	let hashTable = {};
	for (let i = 0; i < array.length; i++) {
		let curNum = array[i];
		if (hashTable[targetSum - curNum]) {
      return [curNum, targetSum - curNum]
		} else {
      hashTable[curNum] = 1;
    }
	}
	return [];
}


// ** SOLUTION ONE **

function twoNumberSum(array, targetSum) {
	let hashTable = {};
	for (let i = 0; i < array.length; i++) {
		let curNum = array[i];
		hashTable[curNum] = 1;
		if (hashTable[targetSum - curNum] && (targetSum - curNum !== curNum)) {
			return [curNum, targetSum - curNum]
		}
	}
	return [];
}

// pseudocode
  //edge cases:
    //targetSum - curNum = curNum (don't want to add curNum to itself)
      //can resolve this by only adding curNum to hashTable AFTER checking hashTable (ln 11-12)
    //no pairs
  //initialize hash table
  //loop through array
    //store each num in hash table
    //see if hashTable[targetSum - curNum] exists
    //if yes, return [curNum, targetSum - curNum]

// time & space complexity:
  // o(n) for both, where n is length of array

