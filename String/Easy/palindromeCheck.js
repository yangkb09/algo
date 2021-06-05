//https://www.algoexpert.io/questions/Palindrome%20Check

// ** SOLUTION ONE **
// use pointers to compare left most and right most chars, increment/decrement respectively

// TIME & SPACE
  // time: o(n) where n is length of string
  // space: o(1)

// CODE
function isPalindrome(string) {
  let left = 0;
	let right = string.length - 1;

	while (left < right) {
		if (string[left] !== string[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
}

// APPROACH
  /*
    input: string (nonempty); output: boolean

    examples:
    "racecar" => true
    "water" => false

    edge cases: single character strings are palindromes

    brute force:
    iterate through string backwards
    create a reversed copy of the string
    see if it matches input string

    this is o(n^2) because in most languages where strings are immutable, adding a char to a string involes re-creating the entire string
    aka, iterating through every char in the string

    optimized:
    initialize two pointers, one at end one at beginning
    iterate through string
      if they don't equal => return false
    return true
  */

// NOTES
  /*

  */
