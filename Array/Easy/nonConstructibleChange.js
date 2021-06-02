//https://www.algoexpert.io/questions/Non-Constructible%20Change

// ** SOLUTION ONE **
// sort input array, initiate var with amount of change you can currently make up to

// TIME & SPACE
  // time: o(nlogn) where n is length of coins array
  // space: o(1)

// CODE
function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let change = 0;

  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    if (coin <= change + 1) {
      change += coin;
    } else {
      return change + 1; //bc we can't create change + 1 (since we don't have that num)
    }
  }
  return change + 1; //in case we reach end of for loop w/o hitting ln 19-20
}


// PSEUDOCODE
  /*
    input: arr of coin values; output: num, minimum sum of change
    you can't create

    examples:
    coins = [6, 3, 1, 9]; output = 2

    edge cases: multiple coins of same value (need to return change + 1 outside for loop)

    brute force: try to create every single amount of change, starting at 1

    optimized:
    sort coins
    initialize variable, change, to track how much change we can currently create
    iterate through coins
      if coin <= change + 1, add coin to change (we can create up to that amount)
      else (coin > change + 1), return change + 1
    (break out of loop) return change + 1
  */

// NOTES
  /*
    need to return change + 1 outside of for loop in case we have multiple coins of same value
    at the end
  */
