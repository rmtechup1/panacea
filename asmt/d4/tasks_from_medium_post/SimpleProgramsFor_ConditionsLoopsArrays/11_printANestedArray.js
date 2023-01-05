/**
Print the contents of the input variable

var input = [
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input){
for (var i = 0; i < input.length; i++) {
//Your code goes here

}
}

dataHandling(input);
 */

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]
    
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
    //Your code goes here
        console.log(`Item at position: ${i} is: ${input[i]}`);

    }
    }
    
    dataHandling(input);

//NOTE: If we need a recursive solution to displaying each primitive individually, that can be done too. Instead, as the question just asks for directly printing what exists at given position, followed the above method.

// Item at position: 0 is: 0001,Roman Alamsyah,Bandar Lampung,21/05/1989,Membaca
// Item at position: 1 is: 0002,Dika Sembiring,Medan,10/10/1992,Bermain Gitar
// Item at position: 2 is: 0003,Winona,Ambon,25/12/1965,Memasak
// Item at position: 3 is: 0004,Bintang Senjaya,Martapura,6/4/1970,Berkebun