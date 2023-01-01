  
/**
 * 7. Write 6 statement which provide truthy & falsey values.
 */

function checkTF(a){
    if(a){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

let tmpVbl;
  
//Below are the standard falsy values in JS
checkTF(false);
checkTF(0);
checkTF(-0);
checkTF(0n); //same as checkTF(BigInt('0'));
checkTF("");
checkTF(null);
checkTF(tmpVbl);
checkTF(Number('2cows')); //NaN

tmpVbl=2;

//Any value that's not falsy is truthy
checkTF(true);
checkTF(10);
checkTF(-50);
checkTF(BigInt('1'));
checkTF("hi");
checkTF(1+2);
checkTF(tmpVbl);
checkTF(Number('24'));


/*
22:31:18.746 false debugger eval code:12:17
22:31:18.747 false debugger eval code:12:17
22:31:18.747 false debugger eval code:12:17
22:31:18.747 false debugger eval code:12:17
22:31:18.748 false debugger eval code:12:17
22:31:18.748 false debugger eval code:12:17
22:31:18.748 false debugger eval code:12:17
22:31:18.748 false debugger eval code:12:17
22:31:18.749 true debugger eval code:9:17
22:31:18.749 true debugger eval code:9:17
22:31:18.750 true debugger eval code:9:17
22:31:18.750 true debugger eval code:9:17
22:31:18.750 true debugger eval code:9:17
22:31:18.750 true debugger eval code:9:17
22:31:18.750 true debugger eval code:9:17
22:31:18.751 true debugger eval code:9:17
*/