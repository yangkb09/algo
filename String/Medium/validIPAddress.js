//https://www.algoexpert.io/questions/Valid%20IP%20Addresses

// ** SOLUTION ONE **
// triply nested for loop to check for every possible combo; helper func to check if section is valid

// TIME & SPACE
  // time: o(1)
      // the solution doesn't depend on the size of the input
      // size of input will be at most 12
      // we have a constant/finite upper bound
  // space: o(1)
    // same reason that it's constant time
    // at most can generate a list to 2^32 valid ip addersses (which'll never happen)

// CODE
function validIPAddresses(string) {
  let ipAddressesFound = [];

	for (let i = 0; i < Math.min(string.length, 4); i++) { //first position for period can only be after 1st period
		let currentIpAddressParts = ['', '', '', ''];
		currentIpAddressParts[0] = string.slice(0, i); //give us w/e is before 1st period we placed
		if (!isValidPart(currentIpAddressParts[0])) continue; //if not valid, don't continue this part of loop

		//if valid, let's move next period
		for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
			currentIpAddressParts[1] = string.slice(i, j); //left of i is first section, j is end of 2nd period
			if (!isValidPart(currentIpAddressParts[1])) continue; //continue is for this j for loop

			for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) { //defines 3rd and 4th section
			currentIpAddressParts[2] = string.slice(j, k);
			currentIpAddressParts[3] = string.slice(k);
				if (isValidPart(currentIpAddressParts[2]) && isValidPart(currentIpAddressParts[3])) {
					ipAddressesFound.push(currentIpAddressParts.join('.'));
				}
			}
		}
	}
  return ipAddressesFound;
}

function isValidPart(string) {
	const stringAsInt = parseInt(string); //turns string into int, removes leading 0s
	if (stringAsInt > 255) {
		return false;
	}
	return string.length === stringAsInt.toString().length; //safety check for leading 0s
}

// APPROACH
  /*
    input: string of nums (with length <= 12); output: array of strings

    notes:
    contains 3 periods,
    contains 4 sections
    no leading 0s;
    individual integers must be between 0 - 255 inclusive
    output order doesn't matter

    edge cases:
    no valid IP address can be created => []
    strings that have < 4 digits (same as above)

    optimized:
    initialize variable to hold output IP addresses

    iterate through either first 3 digits or string's length (whichever is less) to pick first location for first period
      initialize array to hold valid sections of current IP address
      check whether this section is valid
      if yes, store it
      if not, increment in this for loop to check next value

      iterate through either next 3 digits or string's length (whichever is less)
        check whether this section is valid
        if yes, store it
        if not, increment in this for loop to check next value

        iterate through either next 3 digits or string's length (whichever is less)
          check whether this section and next (fourth) section are valid
          if yes, store it
          push ipAddressesFound (all valid parts of 1 ip addresS) into output array and join them with '.'

    return output array

    define isValid helper function
      turn string section into integer
      check if integer is greater than 255, if yes, return false
      return whether string.length is same as integer.toString.length
  */

// NOTES
  /*
    way to check for leading 0s is to compare the original string length to the stringAsInt length

  */
