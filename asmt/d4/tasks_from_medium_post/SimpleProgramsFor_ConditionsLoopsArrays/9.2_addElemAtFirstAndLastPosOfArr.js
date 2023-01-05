/**
 * Add your name to the end of the friends array, and add another name to beginning.
 */

const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];

  console.log('Before:', friends[0], ',', friends[friends.length - 1]);

  friends.unshift('AddThisNameTo_FIRST_Position'); //add at beginning
  friends.push('AddThisNameTo_LAST_Position'); //add at end

  console.log('After:', friends[0], ',', friends[friends.length - 1]);


  
//   Before: Mari , AAK chandran
//   After: AddThisNameTo_FIRST_Position , AddThisNameTo_LAST_Position