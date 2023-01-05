/**
 * Find the friends names who has letter ‘a’ and return the list.
 */

const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];

const filterNamesWithA = friends.filter(function (ele){
  if( ele.search('a') === -1 && ele.search('A') === -1 ){
    return false;
  }else{
    return true;
  }
});

console.log(`Filtered list: ${filterNamesWithA}`);

//Filtered list: Mari,MaryJane,CaptianAmerica,Munnabai,AAK chandran