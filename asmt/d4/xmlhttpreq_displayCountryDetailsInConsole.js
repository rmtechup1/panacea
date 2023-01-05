
let req = new XMLHttpRequest();

//alternative url: jsonplaceholder.typicode.com/posts

req.open('GET', 'https://restcountries.com/v3.1/all');

req.send();

req.onload = function(){
    parsedResp = JSON.parse(this.response);
    for(i=0; i<parsedResp.length; ++i){
    console.log(parsedResp[i].flag);
    console.log('official name: [', parsedResp[i].name.official, 
                '], flag: [', parsedResp[i].flag, 
                '], region: [', parsedResp[i].region, 
                '], subregion: [', parsedResp[i].subregion, 
                '], population: [', parsedResp[i].population,
                ']');
    }  
}
//why cant we use ()=>{} syntax here for the callback funtion???

