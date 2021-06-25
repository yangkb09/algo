//https://www.algoexpert.io/questions/Minimum%20Characters%20For%20Words

// ** SOLUTION ONE **
// hash tables, nested for loop

// TIME & SPACE
  // time: o(n * l) where n is number of words we have and l is length of longest word
  // space: o(c) where c is number of unique characters in all the words we have
    //o(c) is actually a lower bound, because outputArr could take up more space than the hash table used to store the ferquencies
    //upper bound for space complexity would be o(n*l); happens when ever single char in each word is unique


// CODE
function minimumCharactersForWords(words) {
	let totalHash = {};
	let outputArr = [];

  for (let i = 0; i < words.length; i++) {
		let wordHash = {}; //need to initialize wordHash inside for loop so it starts as empty obj each iteration
		let word = words[i];
		for (let j = 0; j < word.length; j++) {
			let char = word[j];
			wordHash[char] = (wordHash[char] || 0) + 1;
		}
		for (let key in wordHash) {
			if (!totalHash[key] || wordHash[key] > totalHash[key]) {
				totalHash[key] = wordHash[key];
			}
		}
	}
	for (let key in totalHash) {
		for (let i = 0; i < totalHash[key]; i++) {
			outputArr.push(key)
		}
	}
  return outputArr;
}

// APPROACH
  /*
    input: array (of words); output: array (smallest arr of chars needed to form all the words)

    note:
    output order doesn't matter
    input doesn't contain spaces
    input can contain punctuation/special chars

    example:
    ["hello", "hi!", "hohoho"] => ["h", "e", "l", "l", "o", "i", "!", "h", "h", "o", "o"]

    edge cases:
    empty string
    punctuation/special chars

    approach:
    initialize total hash table
    initialize word hash table

    iterate over array
      grab each word
      iterate over word
        tally up each character in the word in a separate (word) hash table
          wordHash[char] = (either current value or 0) + 1
        check if wordHash keys exist in totalHash, update totalHash if wordHash key:value is greater

      fill array with key value pairs
        iterate over totalhash
          for the number of frequencies (loop)
            push the key into the arr

  */

// NOTES
  /*
    none
  */
