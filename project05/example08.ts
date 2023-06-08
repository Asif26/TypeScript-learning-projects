class Car8 {
  constructor(color: string, location: string, vin: string) {
    this.color = color;
    this.location = location;
    this.vin = vin;
  }
  readonly vin: string;

  color: string;
  location: string;
  owner?: string;
  power(state: boolean) : string {
    if (state === true) {
      return "Starting engin.";
    } else {
      return "shuting  down engin";
    }
  }
}

// let myCar = new Car6("Black", "karchi", "1A");
// let asifCar = new Car6("silver", "chore Qumber ", "1B");
// console.log(
//   `Asif's Car ${asifCar.color} and location is ${asifCar.location} vin ${asifCar.vin}`
// );
// console.log(
//   `Ali's Car ${myCar.color} and location is ${myCar.location} vin ${myCar.vin}`
// );

class Mercedes extends Car8 {
  constructor(
    color: string,
    location: string,
    vin: string,
    alloywheels: boolean
  ) {
    super(color, location, vin);
    this.alloywheels = alloywheels;
  }
  alloywheels: boolean;
  adjustableSuspension = true;
  power(state: boolean) {
    if (state === true) {
        return "Starting engin.";
    } else {
      return "shutingdown engin";
    } 
  }
}

let myCar1 = new Mercedes("Sliver", "dadu", "LBW1", true);
console.log(myCar1.power(true));

export {};
