/**
 * Find the name with max characters and return the name.
 */
const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];

  let maxLenIndex = 0;

  for(i = 1; i < friends.length; ++i){
    if(friends[i].length > friends[maxLenIndex].length){
        maxLenIndex = i;
    } 
  }

  console.log(`Name of one friend with max chars is: ${friends[maxLenIndex]} & their respective index is: ${maxLenIndex}`);

  // Name of one friend with max chars is: CaptianAmerica & their respective index is: 2