"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car2 = /** @class */ (function () {
    function Car2() {
        this.color = "silver";
    }
    Car2.prototype.power = function (state) {
        if (state === true) {
            // console.log("Starting engin.");
            return "Start";
        }
        else {
            // console.log("shuting down engin");
            return "Off";
        }
    };
    return Car2;
}());
var myCar = new Car2();
console.log(myCar.power(true));
