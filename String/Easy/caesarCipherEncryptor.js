//https://www.algoexpert.io/questions/Caesar%20Cipher%20Encryptor

// ** SOLUTION ONE **
// iterate over input string and find the new idx by adding newKey to cur alphabet idx

// TIME & SPACE
  // time: o(n) where n is length of input string
  // space: o(n)

// CODE
function caesarCipherEncryptor(string, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	let newStr = '';
	const newKey = key % 26; //handle wrapping around
	let idx = 0;
	for (const char of string) { //iterate over input string with for OF loop
		idx = alphabet.indexOf(char) + newKey; //find idx of char in alphabet arr
		let slicedChar = alphabet[idx % 26] //need idx % 26 to account for wrapping
		newStr += slicedChar;
	}
	return newStr;
}

// APPROACH
  /*
    input: string, num; output: string;

    examples:
    ("abc", 3) => "def"
    ("bzx", 2) => "dbz"
      1, 25, 23 //idx
      3, 27, 25 //key + idx
      3, 1, 25 //adjusted for wrap

    edge cases: empty str?

    optimized:
    init alphabet array
    init string to hold output
    init newKey as key % 26 (account for loop)

    iterate over string
    find new index of char by finding curIdx in alphabet + newkey
    slice newchar out of array with alphabet[idx % 26]
    add new char to string

    return string
  */

// NOTES
  /*
    when things wrap, can handle it with %
    Strings require O(n) space (where n is the length of the string)
    use split to turn string into array
  */
