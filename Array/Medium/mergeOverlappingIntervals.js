//https://www.algoexpert.io/questions/Merge%20Overlapping%20Intervals

// ** SOLUTION ONE **
// sort input arr, iterate once through, compare curInterval w prevInterval, push into newArr

// TIME & SPACE
  // time: o(nlogn) where n is the length of input array
  // space: o(n)

// CODE
function mergeOverlappingIntervals(intervals) {
	intervals.sort((a, b) => a[0] - b[0]); //sort input arr by starting interval

	let mergedIntervals = [];
	let curInterval = intervals[0];
	mergedIntervals.push(curInterval); //start with intervals[0] in the output array

	for (const nextInterval of intervals) { //iterate through arr
		const [_, curIntervalEnd] = curInterval; //deconstruct into 2 vars; this is curInterval in mergedIntervals (output array)
		const [nextIntervalStart, nextIntervalEnd] = nextInterval; //deconstruct

		if (curIntervalEnd >= nextIntervalStart) {
			curInterval[1] = Math.max(curIntervalEnd, nextIntervalEnd) //modifies curInterval IN MERGEDINTERVALS
		} else {
			curInterval = nextInterval; //so next comparison will be to the updated curInterval
			mergedIntervals.push(curInterval);
		}
	}
	return mergedIntervals;


}

// APPROACH
  /*
    input: 2D array; output: 2D array

    note:
    interval[0] always <= interval[1]
    output array order of intervals doesn't matter

    examples:
    [[3, 5], [2, 4], [8, 8], [6, 9]] => [[2, 5], [6, 9]]

    edge cases:
    empty array? in this problem, no
    "sorted" intervals? no

    optimized:
    sort input arr

    init var for output array (mergedIntervals)
      curInterval (first interval in input arr)

    push first interval in inputarr into outputarr

    iterate through inputArr
		  if they do overlap, we merge them by mutating existing interval in output arr by changing end val
        find the max between curintervalEnd and nextIntervalEnd, update outputArr
      if we see interval that doesn't overlap w last num in prev interval,
      update curInterval to be nextInterval
      push into output

    return outputArr
  */

// NOTES
  /*
    initially thought i needed to nest for loops (Brute force), but realize that i can just sort the input arr and it'll be better time complexity

    compare array[i] (nextInterval) to what's in the output arr (curInterval) bc output arr (curInterval) might hold previously merged intervals

    curInterval[1] = Math.max(curIntervalEnd, nextIntervalEnd) //modifies curInterval IN MERGEDINTERVALS

    first iteration, curInterval is the same as nextInterval, so we end up modifying it, but it's the same
  */
