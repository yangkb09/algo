//https://www.algoexpert.io/questions/Sum%20of%20Linked%20Lists

// ** SOLUTION ONE **
// iterate over both input LLs at the same time

// TIME & SPACE
  // time: o(max(n, m)) where n is length of LLOne and m is length of LLTwo;
  // space: o(max(n, m));

// CODE
// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
	const outputLL = new LinkedList(0); //dummy node for head of LL
	let curNode = outputLL;
	let carry = 0;

	let nodeOne = linkedListOne;
	let nodeTwo = linkedListTwo;

	while (nodeOne !== null || nodeTwo !== null || carry != 0) {
		//make sure we have a node to get a val from
		const valueOne = nodeOne !== null ? nodeOne.value : 0;
		const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
		const sumOfValues = valueOne + valueTwo + carry;

		const newValue = sumOfValues % 10; //% 10 because want to handle carry
		const newNode = new LinkedList(newValue);

		curNode.next = newNode; //
		curNode = newNode; //update curNode to be last LL node we created

		carry = Math.floor(sumOfValues / 10); // either 0 or 1
		nodeOne = nodeOne !== null ? nodeOne.next : null; //if we finish looping through LL, calling nodeOne.next would result in err
		nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
	}
	return outputLL.next;
}

// APPROACH
  /*
    input: heads of two SLL; output: head of one SLL (representing sum of integers from input SLLs)

    note:
    SLL represent integers
    can't mutate input SLLs
    each node's value is a positive integer between 0 - 9
    first node in input SLL is LEAST significant digit

    example:
    linkedListOne = 9 -> 2 -> 0 -> 3
      (3029)
    linkedListTwo = 3 -> 9 -> 1
      (193)
    output = 2 -> 2 -> 2 -> 3
      (3222)

    edge cases:
    when integers add to be greater than 9
    having a carry at the end of the LL

    brute force:
    iterate through LLOne, find the integer it represents
    iterate through LLTwo, find the interger it represents
    add the two integers together
    create a new LL

    optimized:
    initialize dummy node to track head of outputLL
    initialize new variable curNode to track last value we added in output LL
    initialize carry = 0;

    initialize nodeOne to hold current node in LLOne
    initialize nodeTwo to hold current node in LLTwo

    iterate over the longest LL (keep iterating as long as nodeOne doesn't equal null, or nodeTwo doesn't equal null, or carry isn't 0)
      initialize valueOne to hold onto nodeOne's value (if it's null, set it equal to 0)
      initialize valueTwo to hold onto nodeTwo's value (if it's null, set it equal to 0)
      initialize sumOfValues to hold onto sum of valueOne + valueTwo + carry

      initialize newValue to hold value of the new Node we'll make as sumOfValues % 10 (to handle carry)
      initialize newNode as a new LL node with newValue as the value

      set curNode.next to equal the newNode
      update curNode to equal newNode (last LL node we created; could also be curNode.next)

      set carry equal to Math.floor(sumofValues / 10) => this makes it so that if sumOfValues < 10, carry = 0; else, carry = 1
      set nodeOne equal to either nodeOne.next, or null if we're finished looping through LLOne
      set nodeTwo equal to either nodeTwo.next, or null if we're finished looping through LLTwo

    return outputLL.next
  */

// NOTES
  /*
    if you want to iterate over inputs but dont know which one is longer, you can just say "keep iterating while at least one or the other aren't null"
    to deal with null values, you can set their value to a variable by checking if they're null - if they are, value is 0
    if you want to find the remainder of something, use mod (%)
    since carry is either 0 or 1, we can add it in the sum each time and just calculate whether it's 0 or 1
      i can calculate whether it's 0 or 1 by using Math.floor (returns the largest integer less than or equal to a given number.)

    when initializing a new LL to return, you can initialize it with a dummy head node then just return the next node
  */
