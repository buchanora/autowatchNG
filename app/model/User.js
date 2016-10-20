export default class User {
    // define the User class constructor function that takes an object(slots) with car properties as an argument
    constructor(slots){
        this.userID = slots.userName;
        this.pass = slots.password;
    }
    // Define a class level method for creating new users
    addNew(slots){
        let user = new User(slots);
        // Add new user to the user directory
        User.directory[slots.userId] = user;
        
        console.log(`New user with username: ${slots.userName} added`);
    }
    saveAll(){
        let userString = "", 
            error = false, 
            numOfUsers = Object.keys(User.directory).length;
        try{
            userString = JSON.stringify(User.directory);
            localStorage["users"] = userString;
        }catch(e){
            alert(`couldn't save users to Local Storage due to an error\n ${e} `);
            error = true;
        }
        if (!error) console.log(`${numOfUsers} users saved to Local Storage`)
    }
    
}

// create an empty hash for storing all user instances
    User.directory = {};