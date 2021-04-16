const password = 'katakana';
let response;
let entryCount = 0;
const entryLimit = 3;
let error = false;

while(response != password && !error){
    if(entryCount < entryLimit){
        response = window.prompt('Input your password!');
        entryCount++
    }else{
        error = true;
    }
}
if(error){
    alert('Too many entries!')
}else{
    alert('You\'ve got it!')
}


