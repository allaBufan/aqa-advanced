const users = [
    {name: "Alla", email: "mymail@google.com", age: 18},
    {name: "Alex", email: "hismail@google.com", age: 81}, // array of objects
    {name: "Lola", email: "hermail@google.com", age: 8}
]

for (const user of users){
    console.log(`Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`); // for...or cycle to log every element
}

for (const {name, email, age} of users){
    console.log(`${name}, ${email}, ${age}`); // for...of cycle to destructure and log every element 
}
