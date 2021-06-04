//https://www.algoexpert.io/questions/Move%20Element%20To%20End

// ** SOLUTION ONE **
// use pointers to track leftIdx & rightIdx, move pointers toward middle and swap in place

// TIME & SPACE
  // time: o(n) where n is length of array
  // space: o(1)

// CODE
function moveElementToEnd(array, toMove) {
	let leftIdx = 0;
	let rightIdx = array.length - 1;

	while (leftIdx < rightIdx) {
		while (leftIdx < rightIdx && array[rightIdx] === toMove) { //NEED leftIdx < rightIdx so pointers dont overlap / cross (decrement rightIdx when remaining nums between leftIdx and rightIdx are correctly sorted)
			rightIdx--; //initially lets us skip a bunch of correct integers at the end, later serves to decrement right pointer
		}
		if (array[leftIdx] === toMove) {
			swap(leftIdx, rightIdx, array);
		}
		leftIdx++;
	}
	return array;
}

function swap(leftIdx, rightIdx, array) {
	const temp = array[rightIdx]
	array[rightIdx] = array[leftIdx]
	array[leftIdx] = temp
}


// APPROACH
  /*
    input: (array of integers, integer); output: same array, with target integers moved to the end

    notes: moving should be done in place; order of non target integers doesn't matter

    example: ([1, 2, 5, 3, 1, 1, 3, 4], 1) => [2, 5, 3, 3, 4, 1, 1, 1]

    edge cases: toMove doesn't exist in array; empty array, negative nums?

    brute force: sort - should realize you can do better than nlogn; can't really do better than linear time (n)
    because you'd still have to go thru the entire array

    optimized: swapping numbers in place

    set pointers at start and end of array
    while leftIdx < rightIdx
      while right pointer points to integer to move, and while right pointer doesn't overlap with left pointer, decrement right pointer
      if left pointer points to integer to move, swap left num and right num
      increment left pointer
  */

// NOTES
  /*
    MUST have second while (leftIdx < rightIdx) check in the second while loop so pointers don't overlap when you reach a point where reamining nums between left num and right num are correctly sorted

    having a while (array[rightIdx] === toMove) lets us initially skip any correct integers at the end, AND serves to decrement right pointer
  */
