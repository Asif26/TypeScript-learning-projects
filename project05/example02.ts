class Car2 {
  color = "silver";
  power(state: boolean) {
    if (state === true) {
      // console.log("Starting engin.");
      return "Start"
    } else {
      // console.log("shuting down engin");
      return "Off"
    }
  }
}
let myCar = new Car2();
console.log(myCar.power(true));
export{}