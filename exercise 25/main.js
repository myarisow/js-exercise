

//spread operators

const number = [ 1, 2, 3];

const allNumbers = [...number, 4, 5, 6];

console.log(allNumbers);

//rest operators

function multiply(...number){

    return number.reduce((total, num) => total * num, 1)
};

console.log(multiply(10,30, 40,));
