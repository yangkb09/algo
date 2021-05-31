//https://www.algoexpert.io/questions/Validate%20Subsequence

// ** SOLUTION THREE **
// pointers, both starting from idx 0

// time & space complexity:
  // time: o(n) where n is length of array
  // space: o(1)

function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrIdx++
  }
  return seqIdx === sequence.length
}

// ** SOLUTION TWO **
// counter, slight refactor of solution one
// check if sequenceIdx === sequence.length inside of for loop

// time & space complexity:
  // time: o(n) where n is length of array
  // space: o(1)

  function isValidSubsequence(array, sequence) {
    if (array.length < sequence.length) {
      return false;
    }
    let sequenceIdx = 0;
    for (let i = 0; i < array.length; i++) {
      let curNum = array[i];
      let seqNum = sequence[sequenceIdx]
      if (curNum === seqNum) {
        sequenceIdx++
      }
      if (sequenceIdx === sequence.length) {
        return true;
      }
    }
    return false;
  }

// ** SOLUTION ONE **
// counter

// time & space complexity:
  // time: o(n) where n is length of array
  // space: o(1)

  function isValidSubsequence(array, sequence) {
    if (array.length < sequence.length) {
      return false;
    }
    let sequenceIdx = 0;
    for (let i = 0; i < array.length; i++) {
      let curNum = array[i];
      let seqNum = sequence[sequenceIdx]
      if (curNum === seqNum) {
        sequenceIdx++
      }
    }
    if (sequenceIdx === sequence.length) {
      return true;
    } else {
      return false;
    }
  }

// pseudocode
  // loop through array
  // if we find sequence[0], keep looping until we find rest of sequence
