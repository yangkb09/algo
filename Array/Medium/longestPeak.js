//https://www.algoexpert.io/questions/Longest%20Peak

// ** SOLUTION ONE **
// in one while loop, find the peaks, length of the peak, compare curPeakLength to longestPeakLength

// TIME & SPACE
  // time: o(n) where n is length of input array
  // space: o(1)

// CODE
function longestPeak(array) {
	let longestPeak = 0;

	//find the peaks
	let i = 1; //start at second value in the array
	while (i < array.length - 1) { //end at second to last num
		let isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
		if (!isPeak) { //if not peak, continue along
			i++;
			continue; //don't run the rest of the code
		}
		//find left end of peak
		let leftIdx = i - 2; // -2 bc we already know i-1 is less than i
		while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) { //need leftIdx + 1
			leftIdx--;
		}
		//find right end of peak
		let rightIdx = i + 2;
		while(rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) { //need rightIdx - 1
			rightIdx++;
		}
		//find length of peak
		const currentPeak = rightIdx - leftIdx - 1; //need - 1
		longestPeak = Math.max(longestPeak, currentPeak);
		i = rightIdx;
	}
	return longestPeak;
}

// APPROACH
  /*
    input: array of integers; output: integer

    examples: [0, 1, -5, 1, 2, -2, 3, 4, 0] => 4 //(-5, 1, 2, -2,)

    edge cases: empty arr

    optimized:
    init var to hold longestPeakLength

    initialize i (idx) at 1
    iterate through the array
      initialize peak as a boolean (check if num to left and right of array[i] are smaller than array [i])
      if isPeak is false,
        increment i
        continue

      init left Idx as i - 2 (we already know i - 1 is < array[i])
      iterate to the left of array[leftIdx] so long as leftIdx isn't < 0 and the num to it's right is greater than it
        decrement leftIdx

      init rightIdx as i + 2
      iterate to the right of array[rightIdx] so long as rightIdx doesn't exceed length of array, and the num to its right is smaller than it
        increment rightIdx

      init currentPeakLength as rightIdx - leftIdx - 1
      set longestPeakLength as the maximum between longestPeakLength and currentPeakLength
      set i as rightIdx (since we know some nums to the left of it are larger than it)

    return longestPeakLength

  */

// NOTES
  /*
    although there are nested while loops, for every value, we only visit them at most 2 - 3 times, which'll simplify to o(n)

    make this problem easier by separating into two problems
      find peaks
      compare lengths of peaks
  */
