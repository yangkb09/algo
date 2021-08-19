//https://leetcode.com/problems/reconstruct-original-digits-from-english/

// ** SOLUTION ONE **
//

// TIME & SPACE
  // time: o(n) where n is length of input string
  // space: o(1)

// CODE
function jumbledNumbers(string) {
  const counter = new Array(10).fill(0);
  let output = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === 'z') counter [0] += 1;
    if (char === 'w') counter [2] += 1;
    if (char === 'x') counter [6] += 1;
    if (char === 'u') counter [4] += 1;
    if (char === 's') counter [7] += 1;
    if (char === 'g') counter [8] += 1;
    if (char === 'f') counter [5] += 1;
    if (char === 'h') counter [3] += 1;
    if (char === 'i') counter [9] += 1;
    if (char === 'o') counter [1] += 1;
  }

  counter[7] -= counter[6];
  counter[5] -= counter[4];
  counter[3] -= counter[8];
  counter[9] = counter[9] - counter[8] - counter[5] - counter[6];
  counter[1] = counter[1] - counter[0] - counter[2] - counter[4];

  for (let i = 0; i <=9; i++) {
    for (let j = 0; j < counter[i]; j++) {
      output += i;
    }
  }
  return output;
}

//TEST CASES
console.log(jumbledNumbers('owotfnuoer')) //124
console.log(jumbledNumbers('fviefuro')) //45
console.log(jumbledNumbers('zesxrionezoreo')) //0016
console.log(jumbledNumbers('owoztneoer')) //012
console.log(jumbledNumbers('forivozneeezezerroo')) //00015

// APPROACH
  /*
    input: ; output:

    examples:

    edge cases:

    brute force:

    optimized:

  */

// NOTES
  /*
    even numbers all have one unique character
    order of character checking matters
  */
