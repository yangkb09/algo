//https://www.algoexpert.io/questions/Merge%20Linked%20Lists

// ** SOLUTION ONE **
// use three pointers (p1, p1Prev, p2) and iterate through both LL at same time

// TIME & SPACE
  // time: o(n + m) where n is num of nodes in first LL and m is num of nodes in second LL
  // space: o(1)

// CODE
function mergeLinkedLists(headOne, headTwo) {
  let p1 = headOne;
	let p1Prev = null; //nothing b4 headOne
	let p2 = headTwo;

	while (p1 !== null && p2 !== null) { //while they're not null, we have nodes to compare
		if (p1.value < p2.value) { //don't have to mutate anything
			p1Prev = p1; //update p1Prev and p1 to move fwd
			p1 = p1.next;
		} else { //p2 < p1 (aka p2 should come before p1)
			if (p1Prev !== null) p1Prev.next = p2; //if p1 is NOT the head
			p1Prev = p2; //p2 will be the node pointing to p1
			p2 = p2.next;
			p1Prev.next = p1;
		}
	}
	if (p1 === null) p1Prev.next = p2; //if we reached the end of LLOne
	return headOne.value < headTwo.value ? headOne : headTwo;
	//whichever head had smaller val means we merged into that one
}

// APPROACH
  /*
    intput: heads of two SLL; output: head of a SLL

    note:
    merge list in place (no new DS)
    inputs will always have at least 1 node
    inputs are sorted

    example:
    headOne = -5 -> 3 -> 5 -> 7
    headTwo = -2 -> 0 -> 4 -> 5

    output = -5 -> -2 -> 0 -> 3 -> 4 -> 5 -> 5 -> 7

    edge cases:
    will there be negatives?
    what if heads of inputs are the same value
    comparing nodes of the same value

    thoughts:
    arbitrarily decide on which LL will be the one your return - let's say it's the first one
    when do we have to mutate the "base" LL?
      when we find a value in the 2nd LL that's smaller than the curVal in the first LL
    we need pointer to curNode in first LL, prev node in first LL, and curNode in 2nd LL

    optimized:
    initialize vars for p1 (headOne), p1Prev (null), p2 (headTwo)

    iterate over both LL (while p1 and p2 are not null)
      if p1's value is less than p2's value
        set p1Prev to equal p1
        set p1 to equal p1's next node
      else (p2 > p1)
        if p1Prev isn't null, then set p1Prev's next equal to p2
        set p1Prev equal to p2
        set p2 equal to p2's next node
    if p1 is null, p1Prev's next is eequal to p2
    return either headOne if headOne's value is smaller than headTwo's value; else headTwo
  */

// NOTES
  /*
    can also be solved recursively (with worse space complexity due to calls on the call stack)
  */
