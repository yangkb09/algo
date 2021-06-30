//https://www.algoexpert.io/questions/Remove%20Duplicates%20From%20Linked%20List

// ** SOLUTION ONE **
// iterate through LL and remove all duplicates at once

// TIME & SPACE
  // time: o(n) where n is number of nodes in LL
  // space: o(1)

// CODE
// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let leftPointer = linkedList;
	let rightPointer = leftPointer.next;

	while (rightPointer !== null) { //iterate thru LL
		while (rightPointer !== null && leftPointer.value === rightPointer.value) { //while values are the same
			rightPointer = rightPointer.next; //increment rightP
		}
		//rewrite connections
		leftPointer.next = rightPointer;
		leftPointer = rightPointer; //don't need to move the rightP again after this bc it'll get moved in the nested while loop
	}
  return linkedList;
}

// APPROACH
  /*
    input: head of LL (nodes are sorted acc to value); output: head of LL (duplicate vals removed)

    note:
    LL modified in place
    output nodes sorted acc to val

    example:
    intput: -3 -> -3 -> -3 -> -1 -> 0 -> 0 -> 5 -> 6 -> 6
    output: -3 -> -1 -> 0 -> 5 -> 6

    edge cases:
    are these all integer numbers? - yes
    are there negatives? - yes

    approach:
    initialize left pointer and right pointer

    iterate through the LL (while loop, while right pointer isn't null)
      leftPointer point to current node that we're looking for duplicates (Start at head)
      rightPointer point to leftPointer.next
      while leftPointer's value is equal to rightPointer's value
        rightPointer = rightPointer.next
      rewrite pointers
        leftPointer.next = rightPointer
        leftPointer = rightPointer
      return LL
  */

// NOTES
  /*
    need two checks to make sure rightP !== null
  */
