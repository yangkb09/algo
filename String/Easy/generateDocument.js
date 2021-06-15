//https://www.algoexpert.io/questions/Generate%20Document

// ** SOLUTION TWO **
// one hash table, decrement from hash table to mark as "seen"

// TIME & SPACE
  // time: o(n + m) where n is length of characters and m is length of document
  // space: o(c) where c is length of unique characters in characters string

// CODE
function generateDocument(characters, document) {
  let charHash = {};

	for (let char of characters) {
		charHash[char] = (charHash[char] || 0) + 1;
	}
	for (let char of document) {
		if (charHash[char] === 0 || !(charHash[char])) {
			return false;
		}
		charHash[char]--;
	}
	return true;
}

// ** SOLUTION ONE **
// two hash table, compare key/values at the end

// TIME & SPACE
  // time: o(n + m) where n is length of characters and m is length of document
  // space: o(c + d) where c is length of unique characters in characters string / d length of unique chars in document

// CODE
function generateDocument(characters, document) {
  let charHash = {};
	let docHash = {};

	for (let char of characters) {
		charHash[char] = (charHash[char] || 0) + 1;
	}
	for (let char of document) {
		docHash[char] = (docHash[char] || 0) + 1;
	}
	for (let key in docHash) {
		if (docHash[key] > charHash[key] || !charHash[key]) { //docHash[key] > charHash[key] evaluates to false if charHash[key] doesn't exist (is undefined)
			return false;
		}
	}
	return true;
}

// APPROACH
  /*
    input: string of chars, string of chars you want to make; output: boolean of whether you can make chars

    ask interviewer: can we use external space?

    examples:
    ("qowilejafks", "") => true
    ("", "hi there") => false
    ("o4*lrW ^d", "World") => true

    edge cases:
    case sensitve (don't store upper and lower case chars together)
    special characters

    brute force:
    iterate over chars in characters
      determine frequency of current char in the document with helper fun
      determine freq of current char in the characters with helpfer fun
      if documentFreq > charFreq return false
    return true

    helper func takes in current char and either document or characters
      init frequency to 0
      iterate over chars in document/characters
        if current char is equal to character we're looking for (input curChar), increment frequency

      return frequency

    optimized: (solution one)
    initialize charHash

    iterate through characters
      for each char, check if exists in hash
        if yes, increment by 1, if no, set to 1

    iterate through document
      if charHash[char] is 0 or charHash[char] is undefined/falsey
        return false
      decrement charHash[char]

    return true;
  */

// NOTES
  /*
    for loop wasn't working when iterating over characters - characters weren't case sensitive

    docHash[key] > charHash[key] evaluates to false if charHash[key] doesn't exist

    when you have two strings/arrays/objs you're comparing - you can just make a hash table for one input, then iterate over the second input while decrementing from first hash table
  */
