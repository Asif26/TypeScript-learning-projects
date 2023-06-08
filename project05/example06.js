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
var Car6 = /** @class */ (function () {
    function Car6(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    Car6.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting engin.");
        }
        else {
            console.log("shuting down engin");
        }
    };
    return Car6;
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
    function Mercedes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alloywheels = true;
        _this.adjustableSuspension = true;
        return _this;
    }
    return Mercedes;
}(Car6));
var myCar1 = new Mercedes("Sliver", "dadu", "LBW1");
console.log(myCar1);
