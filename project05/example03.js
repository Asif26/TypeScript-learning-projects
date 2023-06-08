var Car3 = /** @class */ (function () {
    function Car3(color, location) {
        this.color = color;
        this.location = location;
    }
    Car3.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting engin.");
        }
        else {
            console.log("shuting down engin");
        }
    };
    return Car3;
}());
var myCar = new Car3("Black", "karchi");
var asifCar = new Car3("silver", "chore Qumber ");
console.log("Asif's Car ".concat(asifCar.color, " and location is ").concat(asifCar.location));
console.log("Ali's Car ".concat(myCar.color, " and location is ").concat(myCar.location));
myCar.power(true);
