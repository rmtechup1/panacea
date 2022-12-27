
/**
 * How to compare two JSON whose properties are the same but their internal order is different
 */

function compareObjEquivalence(obj_1, obj_2){
    
    //check for same no. of keys
    if(Object.keys(obj_1).length === Object.keys(obj_2).length){
        
        console.log("s1: same number of keys");

        //ensure keys are equivalent
        for(tmpKey in obj_1){
            if( !(tmpKey in obj_2) ){
                console.log('exiting at s2: this key in obj1 missing in obj2: ', tmpKey)
                return false;
            }
        }
        
        console.log("s2: same set of keys in both obj");
        let flag = true;

        //ensure values match or are equiv
        for(tmpKey in obj_1){
            if(typeof obj_1[tmpKey] === typeof {}){
                console.log('object found in value, recursing into the object for comparison: ', obj_1[tmpKey]);
                if( ! compareObjEquivalence(obj_1[tmpKey], obj_2[tmpKey]) ){
                    flag = false;
                    console.log('exiting at s3: mismatch in value object: tmpkey/flag: ', tmpKey, flag);
                    console.log('obj1, obj2: ', obj_1, obj_2);
                    break;
                }
            }
            else{
                if(obj_1[tmpKey] === obj_2[tmpKey]){
                    continue;
                }
                else{
                    flag = false;
                    console.log('exiting at s3: mismatch in value for same keys: tmpkey/flag: ', tmpKey, flag, '...CNTD');
                    console.log('...exact values for the above key: ', obj_1[tmpKey], obj_2[tmpKey]);
                    break;
                }
            }
        }
        console.log('stage s3: current flag value is: ', flag)
        if(flag === true){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        console.log('exiting at s1: diff num of keys')
        return false;
    }
}

// let json111 = '{"name": "Person1", "age": 21}';
// let json222 = '{"age": 21, "name": "Person1"}';


let json111 = '{"name": "Person1", "age": 21, "sub": {"age": 21, "name": "Person1"}}';
let json222 = '{"age": 21, "sub": {"name": "Person2", "age": 21}, "name": "Person1"}';


//Parse JSON - easier to manipulate objects than strings
let obj_1 = JSON.parse(json111);
let obj_2 = JSON.parse(json222);

console.log(obj_1, obj_2);

if(compareObjEquivalence(obj_1, obj_2)){
    console.log('Result: Equivalent objects');
}
else{
    console.log('Result: Obj NOT equivalent');
}


