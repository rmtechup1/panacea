/**
 * How to compare two JSON whose properties are the same but their internal order is different
 */
let cmpr = {
    obj_1: {},
    obj_2: {},
    display(){
        console.log(this.obj_1, this.obj_2);
    },
    compareObjEquivalence(objA = this.obj_1, objB = this.obj_2){
        
        //check for same no. of keys
        if(Object.keys(objA).length === Object.keys(objB).length){
            
            console.log("s1: same number of keys: ", Object.keys(objA).length);

            //ensure keys are equivalent
            for(tmpKey in objA){
                if( !(tmpKey in objB) ){
                    console.log('exiting at s2, key ', tmpKey, ' in obj1 missing in obj2', )
                    return false;
                }
            }
            
            console.log("s2: same set of keys in both obj: ", Object.keys(objA));
            
            let flag = true;
    
            //ensure values match or are equiv
            for(tmpKey in objA){
                if(typeof objA[tmpKey] === typeof {}){
                    console.log('s3: entering recursive call: ', tmpKey, objA[tmpKey], objB[tmpKey]);
                                            console.log(tmpKey);
                    if( ! this.compareObjEquivalence(objA[tmpKey], objB[tmpKey]) ){
                        flag = false;
                        console.log(tmpKey);
                        //EXPECTED tmpKey TO BE sub BUT IT WAS name - DOES IT MEAN RECURSION DID NOT CREATE A COPY OF THE FUNC HERE?
                        //SEEMS WE HAVE LOST THAT VALUE AND CANNOT REFER TO THE EXACT KEY WHERE MISMATCH OCCURED ANYMORE
                        //console.log('exiting at s3: mismatch in value object for parent object key:', tmpKey, ', obj1, obj2: ', objA[tmpKey], objB[tmpKey]);//needs correction, use below instead for timebeing
                        console.log('exiting at s3: mismatch in one of the value objects: ', objA, objB);
                        break;
                    }
                }
                else{
                    console.log(tmpKey, objA[tmpKey], objB[tmpKey]);
                    if(objA[tmpKey] === objB[tmpKey]){
                        continue;
                    }
                    else{
                        flag = false;
                        console.log('exiting at s3: mismatch in values for same key: ', tmpKey, objA[tmpKey], objB[tmpKey]);
                        break;
                    }
                }
            }
            console.log('current flag value is: ', flag)
            if(flag === true){
                console.log('s3: same set of values in both objects: ', objA, ' - and - ', objB)
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
    },
    
}

//TC1: Diff num of keys
// let json111 = '{"name": "Person1", "age": 21, "a":4}';
// let json222 = '{"age": 21, "name": "Person1"}';

//TC2: Same num of keys but different keys
//let json111 = '{"name": "Person1", "a":4}';
//let json222 = '{"age": 21, "name": "Person1"}';

//TC3: Equivalent
let json111 = '{"name": "Person1", "age": 21, "sub": {"age": 21, "name": "Person1"}}';
let json222 = '{"age": 21, "sub": {"name": "Person2", "age": 21}, "name": "Person1"}';


//Parse JSON - easier to manipulate objects than strings
cmpr.obj_1 = JSON.parse(json111);
cmpr.obj_2 = JSON.parse(json222);

cmpr.display();

if(cmpr.compareObjEquivalence()){
    console.log('Result: Equivalent objects');
}
else{
    console.log('Result: Obj NOT equivalent');
}

