

//blocking


function delayBlocking() {
   alert("Fetching user data..."); 
    return "Blocking delay completed!";
}

console.log("Start blocking delay...");
console.log(delayBlocking());
console.log("This message is blocked until the delay is complete.");



console.log("----------");


//non-blocking


function delayNonBlocking(callback) {
    setTimeout(() => {
        callback("Non-blocking delay completed!");
    }, 2000);
}

console.log("Start non-blocking delay...");
delayNonBlocking((message) => {
    console.log(message);
});
console.log("This message is not blocked and runs immediately.");

