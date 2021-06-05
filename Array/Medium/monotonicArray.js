//https://www.algoexpert.io/questions/Monotonic%20Array

// ** SOLUTION ONE **
// use vars to assume entire arr is both nonDecreasing and nonIncreasing; iterate thru array and check if we can invalidate one or both assumptions

// TIME & SPACE
  // time: o(n) where n is length of array
  // space: o(1)

// CODE
function isMonotonic(array) {
  let increasing = true; //nonDecreasing
	let decreasing = true; //nonIncreasing

	for (let i = 1; i < array.length; i++) {
		if (array[i] < array[i - 1]) { //next num is smaller
			increasing = false;
		}
		if (array[i] > array[i - 1]) { //next num is larger
			decreasing = false;
		}
	}
	return increasing || decreasing;
}

// APPROACH
  /*
    input: array of integers; output: boolean

    examples:
    [1, 1, 5, 6, 7] => true
    [-5, -5, 1, -6] => false

    edge cases: empty array & one element arrays are monotonic (true)

    approach:
    initialize vars for increasing & decreasing as both true
    iterate through the array, compair pairs of nums
    if the nextNum is less than curNum => increasing = false;
    if the nextNum is greater than curNum => decreasing = false;

    return increasing or decreasing

  */

// NOTES
  /*
    by initially assuming the array is both increasing/decreasing,
    we only update it to false when it breaks our assumption
    meaning that we return false if the array is both increasing and decreasing (it never gets re-updated to true)
  */
