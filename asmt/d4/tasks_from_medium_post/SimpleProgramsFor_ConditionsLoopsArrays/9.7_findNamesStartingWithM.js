/**
 * 7. Find the names and return the list starting with letter M.
 */
 
const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];

  let startsWithM = friends.filter(function(ele){
    if(ele.charAt(0) === 'M' || ele.charAt(0) === 'm'){
        return true;
    }else{
        return false;
    }
  });

  console.log(startsWithM);

  //Array(3) [ "Mari", "MaryJane", "Munnabai" ]