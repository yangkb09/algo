//https://www.algoexpert.io/questions/Sorted%20Squared%20Array

// ** SOLUTION TWO **
// pointers, both starting from idx 0

// time & space complexity:
  // time: o(n) where n is length of array
  // space: o(n)

function sortedSquaredArray(array) {
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;
  let sortedSquares = new Array(array.length).fill(0)

  for (let i = array.length - 1; i >= 0; i--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[i] = smallerValue ** 2;
      smallerValueIdx++;
    } else {
      sortedSquares[i] = largerValue ** 2;
      largerValueIdx--;
    }
  }
  return sortedSquares;
}

// PSEUDOCODE
// use two pointers to track smallest and largest val in input array (array)
// initialize arr to hold squared vals (filled with 0s)
// loop through array BACKWARDS
// compare the abs val of largest and smallest val in array
// square the larger of the two, insert into end of sortedSquares arr
// move pointer
// repeat

// NOTES
// use pointers to remember which val is the larger one
// can fill output array BACKWARDS (largest to smallest)
// edge case when squaring: negative nums

// ** SOLUTION ONE **
// loop, sort

// time & space complexity:
  // time: o(nlogn) where n is length of array
  // space: o(n)

function sortedSquaredArray(array) {
	let squaredArr = []
  for (let i = 0; i < array.length; i++) {
		let num = array[i];
		squaredArr.push(num * num)
	}
	squaredArr.sort((a, b) => a - b)
  return squaredArr;
}

// REACTO
// input: arr of integers in ascending order;
// output: arr of the original integers squared in ascending order

// examples: [-3, -2, 1, 5] => [1, 4, 9, 25]

// edge cases: empty arr; negative numbers - squares won't be sorted in ascending
// can we manipulate the original arr?

// loop over the arr
// square each element
// replace the currElement with the squaredElement
// sort the arr
// return original arr
