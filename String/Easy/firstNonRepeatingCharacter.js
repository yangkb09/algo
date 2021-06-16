//https://www.algoexpert.io/questions/First%20Non-Repeating%20Character

// ** SOLUTION THREE **
// hash table, check for first char with value 1 in hash, return idx

// TIME & SPACE
  // time: o(n) where n is length of input string
  // space: o(1) because it's only lowercase English alphabet chars - meaning it's never greater than o(26)

// CODE
function firstNonRepeatingCharacter(string) {
  let hash = {};
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		hash[char] = (hash[char] || 0) + 1;
	}
	for (let i = 0; i < string.length; i++) {
		let char = string[i]
		if (hash[char] === 1) {
			return i;
		}
	}
  return -1;
}

// ** SOLUTION TWO **
// hash table, check for first key with value 1, find idx of the key

// TIME & SPACE
  // time: o(n) where n is length of input string
  // space: o(1) because it's only lowercase English alphabet chars - meaning it's never greater than o(26)

// CODE
function firstNonRepeatingCharacter(string) {
  let hash = {};
	let firstNonRepeatingChar = '';
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		hash[char] = (hash[char] || 0) + 1;
	}
	for (const key in hash) {
		if (hash[key] === 1) {
			firstNonRepeatingChar = key;
			break; //need to break, otherwise will continue
		}
	}
	for (let i = 0; i < string.length; i++) {
		if (string[i] === firstNonRepeatingChar) {
			return i;
		}
	}
  return -1;
}

// ** SOLUTION ONE **
// nested for loop, use var to toggle b/n true and false indicating whether we found a duplicate

// TIME & SPACE
  // time: o(n) where n is length of input string
  // space: o(1) because it's only lowercase English alphabet chars - meaning it's never greater than o(26)

// CODE
function firstNonRepeatingCharacter(string) {
	for (let i = 0; i < string.length; i++) {
		let leftChar = string[i];
		let foundDuplicate = false;
		for (let j = 0; j < string.length; j++) { //need to start from 0 bc need to check prev letters if duplicate
			let rightChar = string[j];
			if (leftChar === rightChar && i !== j) { //make sure i !== j
				foundDuplicate = true;
			}
		}
		if (!foundDuplicate) {
			return i;
		}
	}
	return -1;
}

// APPROACH
  /*
    input: string (lowercase alphabet letters); output: number (idx of first non repeating char)

    examples:
    "helloworld" => 0
    "funnyfoodunicorn" => 9
    "" => -1
    "abc" => -1

    edge cases:
    empty string

    brute force:
    nested for loop

    traverse the string
    for each char you traverse, traverse through the entire string again to see if the char appears elsewhere
    first idx where you find a char that doesn't appear elsewhere is the idx you return

    optimized:
    initialize hash table

    traverse through string, tally up occurences of each character in the hash table

    iterate through string, check to see if current char in hash is equal 1, return the idx

    if we reach the end of the string without returning an idx, return -1

  */

// NOTES
  /*
    think critically about space complexity when there's ONLY 26 lowercase English alphabet chars
    hahs tables commonly used to track frequencies
  */
