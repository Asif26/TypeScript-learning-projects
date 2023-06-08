"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Car7 = /** @class */ (function () {
    function Car7(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    Car7.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting engin.");
        }
        else {
            console.log("shuting down engin");
        }
    };
    return Car7;
}());
// let myCar = new Car6("Black", "karchi", "1A");
// let asifCar = new Car6("silver", "chore Qumber ", "1B");
// console.log(
//   `Asif's Car ${asifCar.color} and location is ${asifCar.location} vin ${asifCar.vin}`
// );
// console.log(
//   `Ali's Car ${myCar.color} and location is ${myCar.location} vin ${myCar.vin}`
// );
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(color, location, vin, alloywheels) {
        var _this = _super.call(this, color, location, vin) || this;
        _this.adjustableSuspension = true;
        _this.alloywheels = alloywheels;
        return _this;
    }
    return Mercedes;
}(Car7));
var myCar1 = new Mercedes("Sliver", "dadu", "LBW1", true);
console.log(myCar1);
