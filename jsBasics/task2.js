    const name1 = 'Alla';

    const name2 = 'Pit';

const greeting = "Hello" + " " + name1 + " " + "and" + " " + name2; //Concatenation

console.log(greeting); //Will log 'Hello Alla and Pit'

console.log("Hello".concat(" ",name1," ","and"," ",name2)); //Concatenation with the build-in method

let greetingWithTemplate = `Hello ${name1} and ${name2}`; //Concatenation with a template literal

console.log(greetingWithTemplate);