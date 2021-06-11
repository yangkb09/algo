//https://www.algoexpert.io/questions/Run-Length%20Encoding

// ** SOLUTION ONE **
// iterate through string, track length, compare cur and prev chars, use array to store, the .join

// TIME & SPACE
  // time: o(n) where n is length of input string
  // space: o(n)

// CODE
function runLengthEncoding(string) {
  let chars = []; //will look like [9, A, 4, B]
	let length = 1; //input is non-empty, first run will at least be 1

	for (let i = 1; i < string.length; i++) {
		let curChar = string[i];
		let prevChar = string[i - 1];
		if (curChar === prevChar && length < 9) { //two back to back same chars; must be < 9 bc we'll enter if statement, then length will be 9
			length++;
		} else { //the chars are different, end the run
			chars.push(length.toString());
			chars.push(prevChar); //must be prevChar bc curChar will be a different char
			length = 1;
		}
	}
	chars.push(length.toString()); //manually add the length of the last char and last char
	chars.push(string[string.length - 1]);
	return chars.join('');
}

// APPROACH
  /*
    input: non-empty string; output: runlength encoding (string)

    examples:
    "BBBBBBBBBB11    ****___" => "9B1B214 4*3_"

    edge cases:
    special characters (nums, %$!@_, etc)
    capitalized/lower case
    spaces
    repeating characters ("aabbbaa")

    optimized:
    init vars for chars array and length (starting at 1)

    iterate through input string
    compare current character with previous character
    if curChar is equal to prevChar, and length is less than 9
      increment length
    else (either chars arent equal or length is 9 or more)
      push the length into chars array
      push the prev char into chars array
      reset length to 1

    push length (of last run) into chars array
    push last char in string into chars array
    return joined chars
  */

// NOTES
  /*
    in most languages, strings are an immutable data type
    adding to a string (string concatenation) is an o(n) operation
      therefore, iterating through the input string, then concatenating is an o(n^2) operation
      that's why we MUST use a list (Array) since arrays are mutable
    we need ln 26 - 7 bc otherwise we would stop after pushing in the second to last distinct char
    LESSON LEARNED: you can add a couple lines of code at the end of your function to handle something like that

    questions for future:
    how do you know when compare curChar to prevChar?
  */
