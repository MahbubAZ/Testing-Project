let LANGUAGE = "Java";
let  language = "Javascript";

function getLanguage(){
    if(!language){
        let language = LANGUAGE;
    }
    return language;
}

console.log(`I love ${getLanguage()}`);