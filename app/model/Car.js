export default class Car {
    // define the Car class constructor function that takes an object(slots) with car properties as an argument
    constructor(slots){
        let slotKeys = Object.keys(slots),
            car = this;
        slotKeys.forEach((key)=>{
            car[key] = slots[key];
        });
//        this.vehicleReg = slots.vehicleReg;
//        this.vehicleOwner = slots.userName;
//        this.contactEmail = slots.contactEmail;
//        this.contactPhone = slots.contactPhone;
//        this.vehicleMake = slots.vehicleMake;
//        this.vehicleModel = slots.vehicleModel;
//        this.vehicleColor = slots.vehicleColor;
//        this.datePurchased = slots.datePurchased;
//        this.dateLastServiced = slots.dateEngLastServiced;
//        this.dateLiscenceLastRenewed = slots.dateVLLastRenewed;
//        this.dateTyreLastRotated = slots.dateTyreLastRotated;
//        this.dateTyreLastChanged = slots.dateTyreLastChanged;
//        this.dateWipersLastChanged = slots.dateWipersLastChanged;
//        this.dateShocksLastChanged = slots.dateShocksLastChanged;
//        this.dateNextPickup = slots.dateNextPickup;
    }
    // Define a class level method for creating new cars
    addNew(slots){
        let car = new Car(slots);
        // Add new car to the car directory
        Car.directory[slots.vehicleReg] = car;
        
        console.log(`New car with vehicle reg: ${slots.vehiicleReg} added`);
    }
    saveAll(directory){
        let carString = "", 
            error = false, 
            numOfCars = Object.keys(Car.directory).length;
        try{
            carString = JSON.stringify(Car.directory);
            localStorage["cars"] = carString;
        }catch(e){
            alert(`couldn't save Cars to Local Storage due to an error\n ${e} `);
            error = true;
        }
        if (!error) console.log(`${numOfCars} cars saved to Local Storage`)
    }
    
}
// create an empty hash for storing all car instances
    Car.directory = {};