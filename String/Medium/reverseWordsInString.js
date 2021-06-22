//https://www.algoexpert.io/questions/Reverse%20Words%20In%20String

// ** SOLUTION ONE **
// two separate for loops, join method

// TIME & SPACE
  // time: o(n) where n is length of input string
  // space: o(n)

// CODE
function reverseWordsInString(string) {
	let splitStr = [];
	let reversed = [];
	let leftIdx = 0;
	let rightIdx = 0;

	for (let i = 0; i < string.length; i++) {
		let curChar = string[i];
		if (curChar !== ' ') {
			rightIdx++;
		} else {
			splitStr.push(string.slice(leftIdx, rightIdx));
			leftIdx = rightIdx + 1; //must be rightIdx + 1, otherwise it includes the space before a word when pushing it into splitStr (then we end up with double spaces)
			rightIdx++;
		}
	}
	splitStr.push(string.slice(leftIdx));

	for (let i = splitStr.length - 1; i >= 0; i--) {
		let curElem = splitStr[i];
		reversed.push(curElem)
	}
	reversed = reversed.join(' '); //join by a ' ' because we have empty string holders representing any additional whitespace (when there's more than 1 space between words)

	return reversed;
}

// APPROACH
  /*
    input: string; output: string

    prompt notes:
    word can contain
      special characters
      punctuation
      numbers
    reversed string must contain same number of white spaces

    cannot use
      split/revers

    can use
      join

    examples:
    "Hello, I'm here!" => "here! I'm ,Hello"

    edge cases:
    empty string

    optimized:
    initialize array to hold spilt string; reversed array, left pointer; right pointer

    (separate the input string by whitespaces)
    iterate through the input
      if curChar isn't a space
        increment right pointer (so we can find the entire word)
      if we reach a space
        slice out string from leftidx to rightidx, push it into the holder array
        update leftIdx to be rightIdx + 1
        increment rigthIdx
    push the last word into the holder array

    iterate through array backwards to forwards
      push each word into reversed holder

    return joined reversed holder

return

  */

// NOTES
  /*

  */
