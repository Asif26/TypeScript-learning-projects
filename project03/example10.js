var nikNames = ["Alexander", "Alex", "Alexander The gerat"];
function allNicknames(callback) {
    for (var i = 0; i < nikNames.length; i++) {
        console.log(callback(i));
    }
}
function getNameAt(index) {
    return "".concat(nikNames[index]);
}
allNicknames(getNameAt);
