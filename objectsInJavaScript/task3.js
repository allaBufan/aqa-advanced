const car1 = {
    brand: "Mazda",
    model: 6,
    year: 2010
}

const car2 = {
    brand: "Seat",
    model: "Sedici",
    owner: "John Doe"
}

const car3 = {...car1, ...car2}; // spreads the objects
console.log(car3);