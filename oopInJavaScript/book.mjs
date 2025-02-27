export class Book {
    constructor(name, author, year){ // Creates a class Book with 3 protected properties
        this._name = name;
        this._author = author;
        this._year = year;
    }

    get name(){
        return this._name; // Gets protected property name
    }

    set name(valueN){ 
        if (valueN === 'The Stoic'){ // Validates if it's not the name of the last volume of the trilogy
            console.log('Have you read the first two volumes?'); 
            return;
        }
        this._name = valueN;
    }

    get author(){
        return this._author; // Gets protected property author
    }

    set author(valueA){
        if (valueA !== 'Theodore Dreiser'){ // Validates if it's not Theo
            console.log('Author is not interesting');
            return;
        }
        this._author = valueA;
    }

    get year(){
        return this._year; // Gets protected property year
    }

    set year(valueY){
        if (valueY === 1925){ // Validates if it's 1925
            console.log('Wrong edition');
            return;
        }
        this._year=valueY;
    }

    printInfo(){
        console.log(this.name, this.author, this.year)
    }

    static getOldestBook(books){
        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest // Compares books year to find the oldest one
        })

    }
}