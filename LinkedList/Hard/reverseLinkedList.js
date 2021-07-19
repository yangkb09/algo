//https://www.algoexpert.io/questions/Reverse%20Linked%20List

// ** SOLUTION ONE **
// 3 pointers w/ curNode in middle, rewrite curNode.next to prevNode, move pointers fwd

// TIME & SPACE
  // time: o(n) where n is length of input SLL
  // space: o(1)

// CODE
function reverseLinkedList(head) {
  let prevNode = null;
	let curNode = head; //always pointer we're updating

	while (curNode !== null) {
		const nextNode = curNode.next;
		curNode.next = prevNode; //reversing pointer
		prevNode = curNode;
		curNode = nextNode;
	}
	return prevNode;
}

// APPROACH
  /*
    time: o(n); space: o(1)

    input: SLL; output: SLL

    note:
    reverses list IN PLACE

    example:
    input: -3 -> 0 -> 1 -> 2
    output: 2 -> 1 -> 0 -> -3

    edge cases:
    n/a

    approach:
    initialize prevNode to null
    initialize curNode to head

    while curNode is not null
      initialize nextNode to curNode's next node
      update curNode's next pointer to prevNode
      set prevNode to equal curNode
      set curNode to equal nextNode

    return prevNode
  */

// NOTES
  /*
    3 pointers
  */
