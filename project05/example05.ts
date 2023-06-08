class Car5 {
    constructor(color:string, location: string, vin:string ){
      this.color=color
      this.location= location
      this.vin = vin
  
    }
    readonly vin:string
    
     color : string;
     location :string;
     owner?:string
      power(state: boolean) {
        if (state === true) {
          console.log("Starting engin.");                                             
        } else {
          console.log("shuting down engin");
        }
      }
    }
    
    
  
    let myCar = new Car5("Black","karchi", "1A")
    let asifCar= new Car5("silver","chore Qumber ", "1B")
    console.log(`Asif's Car ${asifCar.color} and location is ${asifCar.location} vin ${asifCar.vin}`);
    console.log(`Ali's Car ${myCar.color} and location is ${myCar.location} vin ${myCar.vin}`);

    let axanderCar : Car5;
    axanderCar = {
        vin: "1C",
        color: "red",
        location:"Macedonia",
        power (){
            
        }

    }

    export{}