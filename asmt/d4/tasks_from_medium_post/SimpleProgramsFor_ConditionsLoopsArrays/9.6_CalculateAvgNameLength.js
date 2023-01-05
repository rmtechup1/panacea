/**
 * Find the avg length of all the friends names. Get the individual length of the names and do the avg.
 */

const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];

let cumulativeLength = 0;

friends.forEach( element => cumulativeLength += element.length );

console.log(`Cumulative length is: ${cumulativeLength},
Total number of names: ${friends.length},
=> Avg length of friend's names: ${cumulativeLength/friends.length}`);



// Cumulative length is: 50,
// Total number of names: 6,
// => Avg length of friend's names: 8.333333333333334