class Car9 {
    constructor(color: string, location: string, vin: string|Number) {
      this.color = color;
      this.location = location;
      this.vin = vin;
    }
    readonly vin: string | Number;
  
    color: string;
    location: string;
    owner?: string;
    power(state: boolean) : any {
      if (state === true) {
        console.log("Starting engin.");
        
         
      } else {
        console.log("shuting  down engin");
         
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
  
  class Mercedes extends Car9 {
    constructor(
      color: string,
      location: string,
      vin: Number,
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
  
  let myCar1 = new Mercedes("Sliver", "dadu", 1, true);
  let Car2a = new Car9("Sliver", "dadu", "ali")
  console.log(Car2a);
  console.log(myCar1);
  
  
  
  export {};
  