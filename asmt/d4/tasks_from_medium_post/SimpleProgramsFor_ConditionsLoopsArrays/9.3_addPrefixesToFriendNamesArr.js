/**
 * Add Mr or Ms to the names in the friends array.
 */

const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];

  console.log(`before: ${friends}`);
  
  for(let i = 0; i < friends.length; ++i){
    friends[i] = 'Mr_Ms. '.concat(friends[i]);
  }
  
  console.log(`after: ${friends}`);

//   before: Mari,MaryJane,CaptianAmerica,Munnabai,Jeff,AAK chandran
//   after: Mr_Ms. Mari,Mr_Ms. MaryJane,Mr_Ms. CaptianAmerica,Mr_Ms. Munnabai,Mr_Ms. Jeff,Mr_Ms. AAK chandran