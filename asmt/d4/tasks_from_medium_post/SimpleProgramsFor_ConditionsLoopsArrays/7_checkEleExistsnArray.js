/*
Find the person is ur friend or not.

const friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

function dataHandling(input, name){
for (var i = 0; i < input.length; i++) {

}
}

let found = dataHandling(friends,"Jeff");

console.log(found);
*/

const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];

  function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
      if(input[i] === name){
        return true;
      }
    }
    return false;
  }

  let found = dataHandling(friends,"Jeff");

  console.log(found);

  //true