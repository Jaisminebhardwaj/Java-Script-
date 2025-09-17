//block of reusable code that performs a specific task
function greet(name) {//parameter
  console.log(`Hello, ${name}!`);
}
// greet//reference
// greet("Jaismine Bhardwaj") //execute (argument)

// function UserLoginMessage(username){
//     if (!username) {
//         console.log("No username provided");
//         return 
//     }
//     return `Welcome back, ${username}!`;
// }
// console.log(UserLoginMessage("Jaismine Bhardwaj"));
console.log(UserLoginMessage());

//no string passed output: Welcome back, undefined!
//empty string passed output: Welcome back, !

function UserLoginMessage(username="Guest"){//default parameter
    if (!username) {
        console.log("No username provided");
        return 
    }
    return `Welcome back, ${username}!`;
}