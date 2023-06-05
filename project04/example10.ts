let nickNames = ["Asif","Ali","Ahmed","Jani"]
let prefrence = [1,2,3,4];
function logNames(greeting : string, ...nickNames:(string|number)[]){
    for(const nickName of nickNames){
        console.log(`${greeting} ${nickName}` )

    }
}

logNames("Hello", ...nickNames);
logNames("Hello", ...prefrence);

