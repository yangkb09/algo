//https://www.algoexpert.io/questions/Remove%20Kth%20Node%20From%20End

// ** SOLUTION TWO **
// use two pointers; increment second pointer so it's k nodes ahead of first pointer; traverse LL moving both pointers

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

function removeKthNodeFromEnd(head, k) {
  let first = head;
	let firstPrev = head;
	let second = head;
	let counter = 1;

	//move second pointer k nodes ahead
	while (counter <= k) { //must be <= (want to point to node that's k nodes AHEAD, not just at the kth node)
		second = second.next;
		counter++;
	}

	//if head is supposed to be removed
	if (second === null) {
		head.value = head.next.value; //updating head's value to be the value of it's next node
		head.next = head.next.next; //rewriting pointer from head to point to the next-next node
		return; //dont want to do anything else after that
	}

	while (second !== null) {
		firstPrev = first;
		first = first.next;
		second = second.next;
	}

	firstPrev.next = first.next;
}


// ** SOLUTION ONE **
// count length of LL; calculate idx of the node before nodeToRemove; iterate until you reach prevIdx

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

function removeKthNodeFromEnd(head, k) {
  let length = 0;
	let curNode = head;
	let curIdx = 1; //must be 1

	while (curNode !== null) {
		length++;
		curNode = curNode.next;
	}

	let prevIdx = length - k; //dont have to subtract by 1 since we start at 1

	curNode = head;
	let nodeToRemove;
	while (curNode !== null) {
		if (prevIdx === 0) {
			head.value = head.next.value;
			head.next = head.next.next
			return;
		}
		if (curIdx === prevIdx) {
			nodeToRemove = curNode.next;
			curNode.next = curNode.next.next;
			nodeToRemove.next = null;
			return;
		}
		curNode = curNode.next;
		curIdx++;
	}
}

// APPROACH
  /*
    input: SLL and integer; output: original SLL

    note:
    dont have to return anything
    SLL will always have at least k nodes
    head of SLL should remain head of SLL after removal, even if head is supposed to be removed

    examples:
    intput:
    head = 5 -> 3 -> 1 -> 0 -> 9 -> 4
    k = 2

    output:
    head = 5 -> 3 -> 1 -> 0 -> 4

    edge cases:
    node to be removed is the head

    solution one:
    initialize a variable to track length of SLL

    iterate over SLL
      increment length after iterating over each node

    find prevIdx length - k (this is the idx of the node BEFORE node to be removed)

    iterate over SLL until we get to prevIdx
      store prevNode
      store nodeToRemove = prevNode.next
      prevNode.next = prevNode.next.next
      nodeToRemove.next = null

    solution two:
    traverse SLL with two pointers: first and second

    have second pointer iterate through k nodes
      then, move both pointers at once while traversing, until second pointer goes past tail of LL

  */

// NOTES
  /*
    be careful of +/- by 1 errors
    start the current idx at 1
    be careful of edge case of removing the head
  */
