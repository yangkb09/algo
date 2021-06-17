//https://www.algoexpert.io/questions/Longest%20Palindromic%20Substring

// ** SOLUTION ONE **
// traverse string, check each idx if it's an even/odd palindrome, keep the longest of the two

// TIME & SPACE
  // time: o(n^2) where n is length of input string
  // space: o(n)

// CODE
function longestPalindromicSubstring(string) {
	let curLongest = [0, 1]; //store tuple of starting idx and ending idx of palindrome; init to 0 and 1 it at least the first letter of the string
  for (let i = 1; i < string.length; i++) { //know that first letter is palindrome, dont want to expand left from idx 0
		let odd = getLongestPalindromeFrom(string, i - 1, i + 1)
		let even = getLongestPalindromeFrom(string, i - 1, i) // i - 1 is left idx
		let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
		curLongest = curLongest[1] - curLongest[0] > longest[1] - longest[0] ? curLongest : longest;
	}
	return string.slice(curLongest[0], curLongest[1]);
}

//helper func
function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
	while (leftIdx >= 0 && rightIdx < string.length) { //if we're still in our string
		if (string[leftIdx] !== string[rightIdx]) break;
		leftIdx--;
		rightIdx++;
	}
	return [leftIdx + 1, rightIdx] //MUST BE leftIdx + 1
}

// APPROACH
  /*
    input: string; output: string (longest palindromic substring)

    note:
    single character strings are palindromes
    there'll only be ONE longest palindromic substring

    examples:
    "a" => "a"
    "coolracecarwow" => "racecar"

    edge cases:
    special characters?
    capitalized characters?
    empty string? - not a concern bc we're told there will always be ONE longest palindromic substring

    brute force:
    generate all possible substrings of the input string and check if each one is a palindrome
    time: o(n^3) bc it'd be o(n^2) to generate all the substrings; then checking if each substring is a palindrome is an o(n) operation

    optimized:
    o(n^2) time bc we must 1) traverse thru string then 2) check if is palindrome

    initialize variable to track currentLongest palindrome (a tuple/array of two values representing idxs)

    traverse through string
      find tuple for potential odd palindrome
      find tuple for potential even palindrome
      find longest of even palindrome vs odd palindrome
      compare longest to currentLongest, update currentLongest
    slice the string using idx from curLongest

    helpfer function to find longest palindrome
    initialize function that takes in string, left Idx, right IDx
    while leftIdx is greater than or equal to 0, and right idx is less than string's length
    if string[leftIdx] doesn't equal string[rightIdx], break
    decrement leftIdx
    inrement rightIdx

    return leftIdx + 1, right Idx

  */

// NOTES
  /*
    knew i had to check for odd and even palindromes
    whether something is a palindrome doens't change based on whether it's odd or even
    that's why we can use a helpfer func and have the same logic, just passing in different idxs

    at every Idx in the string, check for both an odd or even palindrome
  */
