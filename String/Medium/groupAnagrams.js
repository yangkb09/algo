//https://www.algoexpert.io/questions/Group%20Anagrams

// ** SOLUTION ONE **
// iterate thru array, sort characters in every word, add unsorted word to hash table as value to sorted word as key

// TIME & SPACE
  // time: o(w * n * logn); space: (w * n) where w is length of input array of words and n is length of longest word
  // space:

// CODE
function groupAnagrams(words) {
  let anagram = {};

	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		let sortedWord = word.split('').sort().join('');
		if (anagram[sortedWord]) {
			anagram[sortedWord].push(word);
		} else { //if the word isn't already in the anagram, add it in an array
			anagram[sortedWord] = [word];
		}
	}
	return Object.values(anagram);
}

// APPROACH
  /*
    input: array of strings; output: 2D array of string anagrams

    note: output anagram groups don't have to be in specific order

    examples:
    ["woof", "oww", "hi", "wow", "cat", "act", "wwo"] => [["oww", "wow", "wwo"], ["cat", "act"], ["hi"], ["woof"]]

    edge cases:
    empty strings
    capitalization?

    brute force:
    iterate through array
      grab each string
      store each character in a hash table
      iterate through rest of array
        store each character in a hash table
        iterate through hash table to see if key values are the exact same between the two strings

    optimized:
    initialize anagram hash table

    iterate through words array
      at each word, sort its letters
      check hash table to see if we have sortedWrod
        if non existent, add it to hash table
        else, push it to the key/value pair
    return an array of the object's values
  */

// NOTES
  /*
    it's simpler than you think!
  */
