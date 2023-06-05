const nikNames = ["Alexander", "Alex", "Alexander the great"]

function allNicknames(callback:(index:number) => string){
    for (let i = 0; i < nikNames.length; i ++){
        console.log(callback(i));
    }
}


function getNameAt (index:number){
    return `${nikNames[index]}`
}

allNicknames(getNameAt);


function logName(name:string){
    return `${name}`
}
// allNicknames(logName)