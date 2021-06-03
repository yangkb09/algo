//https://www.algoexpert.io/questions/Three%20Number%20Sum

// ** SOLUTION ONE **

// TIME & SPACE
  // time: o(n^2) where n is length of input array
  // space: o(n) (could end up storing every number in the triplet)

// CODE
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
	let tripletArr = [];

	for (let i = 0; i < array.length; i++) {
		let curNum = array[i];
		let leftPointer = i + 1;
		let rightPointer = array.length - 1;

		while (leftPointer < rightPointer) { //less than (not !==)
			let leftNum = array[leftPointer];
			let rightNum = array[rightPointer];

			if (curNum + leftNum + rightNum === targetSum) {
				tripletArr.push([curNum, leftNum, rightNum]);
				leftPointer++; //MUST INCREMENT HERE
				rightPointer--; //MUST DECREMENT HERE
			} else if (curNum + leftNum + rightNum < targetSum) {
				leftPointer++;
			} else {
				rightPointer--;
			}
		}
	}
	return tripletArr;
}


// APPROACH
  /*
  input: arr of distinct integers, target sum integer; output: array holding arrays of triplets
  that sum to target sum (nums in triplets AND triplets in ascending order) OR empty arr if no triplets

  examples: ([-5, -2, 1, 4, 6, 10], 3) => [[-5, -2, 10], [-2, 1, 4]]
    //DONT MAKE INPUT ARR SORTED from the get go

  edge cases: none, arr is supposed to be full

  brute force: triple nested for loop

  optimized:
    initialize tripletArr
    sort array
    iterate through array, holding on to curNum
    use while loop to iterate through pointers
      at each num, place a left pointer to the right of the num
      and a right pointer at end of array
        if curNum + leftNum + rightNum === sum
          push three nums into  tripletArr
          increment leftNum; decrement rightNum //IMPORTANT!!
        curNum + leftNum + rightNum < sum
          move leftNum right one idx
        else curNum + leftNum + rightNum > sum
          move rightNum left one idx
  */

// NOTES
  /*
    when making example input, don't make a sorted input unless prompt says to
    after finding a triplet, remember to still increment/decrement both pointers
    to not get stuck
  */
