//https://www.algoexpert.io/questions/Tournament%20Winner

// ** SOLUTION ONE **
// hash table, var to track currentBestTeam

// time & space complexity:
  // time: o(n) where n is length of results/competitions array
  // space: o(k) where k is num of teams

function tournamentWinner(competitions, results) {
  let roundWinner = '';
  let curBestTeam = '';
  let tracker = {[curBestTeam]: 0}; //NEED THIS

  for (let i = 0; i < results.length; i++) {
    let result = results[i];
    if (result === 1) { //home team won
      tracker[competitions[i][0]] = (tracker[competitions[i][0]] || 0) + 3;
      roundWinner = competitions[i][0];
    } else {
      tracker[competitions[i][1]] = (tracker[competitions[i][1]] || 0) + 3;
      roundWinner = competitions[i][1];
    }
    if (tracker[roundWinner] > tracker[curBestTeam]) {
      curBestTeam = roundWinner;
    }
  }
  return curBestTeam;
}


// PSEUDOCODE
  /*
    Input: competitions and results arr; output: string of winning team name

    use hash table to track team points; include intial key of curBestTeam (empty str) with val of 0
    use curBestTeam to track current team with most points
    use roundWinner to track who won each round

    iterate through results arr
      if result === 1; in hash table, add +1 to competitions[i][0]
      update roundWinner

      check who has more points in hash table between round winner and curBestTeam
        update curBestTeam if roundWinner has more pts

    return curBestTeam
  */

// NOTES
  /*
    need to initialize tracker memo w/ {[curBestTeam]: 0}
      because we need the curBestTeam to have a value for the initial tracker[roundWinner] > tracker[curBestTeam] comparison
    syntax for nested arrays: tracker[competitions[i][1]]
    = vs ===
  */
