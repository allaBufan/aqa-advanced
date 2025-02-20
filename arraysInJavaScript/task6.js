const numbersList = [1,10,14,2,4,5,43,34];
const sortedNumersList = [...numbersList].sort((a,b) => a - b); // Copies array with sorted numbers from initial one
console.log(numbersList);
console.log(sortedNumersList);