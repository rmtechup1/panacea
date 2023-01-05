/**
 Starting from the existing friends variable below, change the element that is currently "Mari" to "Munnabai".

let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

function dataHandling(input){
for (var i = 0; i < input.length; i++) {

}
}

dataHandling(friends);
 */

let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
    if(input[i] === 'Mari'){
        console.log('Before: ', input[i]);
        input[i] = 'Munnabai';
        console.log('After: ', input[i]);
        break;
    }else{
        continue;
    }
    }
    }
    
    dataHandling(friends);



    // Before:  Mari
    // After:  Munnabai