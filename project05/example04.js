"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car4 = /** @class */ (function () {
    function Car4(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    Car4.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting engin.");
        }
        else {
            console.log("shuting down engin");
        }
    };
    return Car4;
}());
var myCar = new Car4("Black", "karchi", "1A");
var asifCar = new Car4("silver", "chore Qumber ", "1B");
console.log("Asif's Car ".concat(asifCar.color, " and location is ").concat(asifCar.location, " vin ").concat(asifCar.vin));
console.log("Ali's Car ".concat(myCar.color, " and location is ").concat(myCar.location, " vin ").concat(myCar.vin));
