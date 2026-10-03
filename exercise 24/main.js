

//default parameters

function calculateArea( width, height = width){

    return width * height;

};

console.log(calculateArea(5, 10));

console.log(calculateArea(5));
