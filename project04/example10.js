var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nickNames = ["Asif", "Ali", "Ahmed", "Jani"];
var prefrence = [1, 2, 3, 4];
function logNames(greeting) {
    var nickNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nickNames[_i - 1] = arguments[_i];
    }
    for (var _a = 0, nickNames_1 = nickNames; _a < nickNames_1.length; _a++) {
        var nickName = nickNames_1[_a];
        console.log("".concat(greeting, " ").concat(nickName));
    }
}
logNames.apply(void 0, __spreadArray(["Hello"], nickNames, false));
logNames.apply(void 0, __spreadArray(["Hello"], prefrence, false));
