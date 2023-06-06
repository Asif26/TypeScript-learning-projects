var Car2 = /** @class */ (function () {
    function Car2() {
        this.color = "silver";
    }
    Car2.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting engin.");
        }
        else {
            console.log("shuting down engin");
        }
    };
    return Car2;
}());
var myCar = new Car2();
myCar.power(true);
