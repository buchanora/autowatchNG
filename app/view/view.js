import Car from "../model/Car";
//creates a new car instance when the submit button is clicked
export default function createCar(){
    //assigning the submit button to saveCarButton variable
    let saveCarButton = document.forms[carForm].createNew;
    
    //add an click event listener to the submit button 
    saveCarButton.addEventListener("click", createCar.handleSaveButtonCLickEvent);   
    
    //defines the function that handles click events on the submit button
    function handleSaveButtonClickEvent(e){
        let carForm = document.forms['carForm'],
            userInputs = carForm.getElementsByTagName("input"),
            slots = {};
        for(key in userInputs){
            slots[key] = key.value;            
        };
        Car.addNew(slots);    
    }
}