//https://www.algoexpert.io/questions/Array%20Of%20Products

// ** SOLUTION THREE **
// initialize product arr with 1's, track product of every elem to the left first, then multiply products for every elem to the right into same arr

// TIME & SPACE
  // time: o(n) where n is length of input arr
  // space: o(n)

// CODE
function arrayOfProducts(array) {
  let products = new Array(array.length).fill(1);

	//iterate thru left products
	let leftRunningProd = 1;
	for (let i = 0; i < array.length; i++) {
		products[i] = leftRunningProd; //set the element as current leftRunningProd
		leftRunningProd *= array[i]; //multiply the leftRunningProd w curNum
	}

	//iterate thru right products, multiply into product arr
	let rightRunningProd = 1;
	for (let i = array.length - 1; i >= 0; i--) {
		products[i] *= rightRunningProd;
		rightRunningProd *= array[i];
	}

	return products;
}

// APPROACH
  /*
    input: non-empty array of integers; output: array of integers

    consider:
    value at ouput[i] === every num in input array other than input[i]
    we want to multiply everything BUT one num => multiply everything to the left of it, then to the right of it
    cannot use division or mutate input arr

    examples: [3, 1, 2, 2] => [4, 12, 6, 6]

    edge cases: array with any 0;

    brute force:
    nested for loop

    optimized:
    init products arr with 1's, same length as input arr

    init leftRunningProd = 1
    iterate through products to the left
      set the corresponding products elem equal to leftRunningProd
      multiply leftRunningProd with input array integer

    init rightRunningProd
    iterate through products to the right (backwards)
      multiply corresponding products elem with rightRunningProd
      multiply rightRunningProd with corresponding input array integer

    return products
  */

// NOTES
  /*
    runningProduct vars must be initialized with 1 (can't be 0, otherwise multiplying it will result in 0)
    if you need to do things to the right and left of something, you can use two (or one) array(s) to hold the values
  */
