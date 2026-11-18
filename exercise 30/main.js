function operate(a, b, callback){
    return callback(a, b);
};

function add(a,b){
    return a + b

}

function substact(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

console.log("addition", operate(19, 54, add));
console.log("subtraction", operate(589, 376, substact));
console.log("multiplication", operate(50, 10, multiply));
console.log("division", operate(588, 4, divide));
