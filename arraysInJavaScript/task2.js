const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
// const multipliedNumbers = numbers.map((number) => number * 2); // Creates copy of array of numbers multiplied by 2 from initial one
// console.log(multipliedNumbers);


function mapHandler(value, index){ // Creates copy of array of numbers multiplied by index from initial one
    return value * index
}
const newArray = numbers.map(mapHandler); 
console.log(newArray);