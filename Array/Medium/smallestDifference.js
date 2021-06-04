//https://www.algoexpert.io/questions/Smallest%20Difference

// ** SOLUTION ONE **
// sort input arrays, use pointers and initialize vars for current diff, smallest diff, smallest pair

// TIME & SPACE
  // time: o(nlogn + mlogm) where n is length of first arr and m is length of second arr
  // space: o(1)

// CODE
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);

	let idxOne = 0;
	let idxTwo = 0;
	let smallestDiff = Infinity; //start at inf because getting smaller from here out
	let current = Infinity; //use current to track current smallest, only update outside of if/else if
	let smallestPair = [];

	while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) { //&& not ||
		let firstNum = arrayOne[idxOne];
		let secondNum = arrayTwo[idxTwo]
		if (firstNum === secondNum) {
			return [firstNum, secondNum];
		} else if (firstNum < secondNum) {
			current = secondNum - firstNum;
			idxOne++;
		} else {
			current = firstNum - secondNum;
			idxTwo++;
		}
		if (current < smallestDiff) { //can do this check outside of if/else if
			smallestDiff = current;
			smallestPair = [firstNum, secondNum]
		}
	}
	return smallestPair;
}

// APPROACH
  /*
    input: two non-empty arrays on integers; output: array containing pair of integers w/ absolute difference closest to zero (num from first arry in 0 idx)

    examples: ([5, 3, -1, 9], [-4, 7, 10, -3]) =>
    [-1, 3, 5, 9], [-4, -3, 7, 10] => 9, 10


    edge cases: are both arrays the same length? are there repeat nums within and between both arrays?

    brute force: nested for loops and test each pair

    optimized:
    sort both arrays

    initiatilize:
      pointers at beginning of both arrays
      currentDiff
      smallestDiff
      smallestPair

    while you haven't reached the end of either array
      if firstNum is equal to secondNum
        return [firstNum, secondNum]
      else if firstNum is less than secondNum
        update currentDiff
        increment idxOne
      else if secondNum is less than firstNum
        update currentDiff
        increment idxTwo
      compare smallestDiff and currentDiff, if currentDiff is less than smallestDiff
        update smallestDiff to be currentDiff

    return smallestPair
  */

// NOTES
  /*
    i can hold onto smallestDiff and currentDiff and compare these things OUTISDE of the if/elseif
    want to start smallestDiff and currentDiff at infinity because we're only getting smaller from here
  */
