/**
 * 2. Iterate through the string array and print it contents
 
var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]

 */

var strArray= ["<option>Jazz</option>",
,"<option>Blues</option>",
,"<option>New Age</option>",
,"<option>Classical</option>",
,"<option>Opera</option>"];

for(i = 0; i < strArray.length; ++i){
    console.log(strArray[i]);
}

// 03:41:32.434 <option>Jazz</option>      debugger eval code:11:13
// 03:41:32.434 undefined                  debugger eval code:11:13
// 03:41:32.434 <option>Blues</option>     debugger eval code:11:13
// 03:41:32.434 undefined                  debugger eval code:11:13
// 03:41:32.434 <option>New Age</option>   debugger eval code:11:13
// 03:41:32.435 undefined                  debugger eval code:11:13
// 03:41:32.435 <option>Classical</option> debugger eval code:11:13
// 03:41:32.435 undefined                  debugger eval code:11:13
// 03:41:32.435 <option>Opera</option>     debugger eval code:11:13