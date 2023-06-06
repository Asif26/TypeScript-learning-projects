class Car2 {
    color= "silver"
    power(state: boolean){ 
        if ( state === true){
            console.log("Starting engin.")

        }else{
         console.log("shuting down engin");
             
            
        }
 
    }
}
let myCar = new Car2();
myCar.power(true);
