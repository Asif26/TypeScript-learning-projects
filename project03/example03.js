"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(name) {
    if (name === void 0) { name = "asif jani"; }
    var nikNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nikNames[_i - 1] = arguments[_i];
    }
    console.log("Helo Dear ".concat(name, ", jani ").concat(nikNames));
}
hello("asif Bashir", "janu", "mithra", "pyra", "sunha", "sanhra");
