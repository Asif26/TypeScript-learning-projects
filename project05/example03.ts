class Car3 {
  constructor(color:string, location: string ){
    this.color=color
    this.location= location

  }
   color : string;
   location :string
    power(state: boolean) {
      if (state === true) {
        console.log("Starting engin.");                                             
      } else {
        console.log("shuting down engin");
      }
    }
  }
  
  

  let myCar = new Car3("Black","karchi")
  let asifCar= new Car3("silver","chore Qumber ")
  console.log(`Asif's Car ${asifCar.color} and location is ${asifCar.location}`);
  console.log(`Ali's Car ${myCar.color} and location is ${myCar.location}`);
  
  myCar.power(true); 
  