import { Book } from "./Book.mjs"; // inports parent class Book
import { EBook } from "./EBook.mjs"; // inports child class EBook

const volume1 = new Book("The Financier", "Theodore Dreiser", 1912); // Creates Book instance
const volume2 = new Book("The Titan", "Theodore Dreiser", 1914); // Creates Book instance
const volume3 = new Book("The Stoic", "Theodore Dreiser", 1947); // Creates Book instance

volume1.printInfo();
volume2.printInfo();
volume3.printInfo();

const eBook1 = new EBook("American Tragedy", "Theodore Dreiser", 1925, "pdf"); // Creates EBook instance

eBook1.printInfo();

const booksArray = [volume1, volume2, volume3, eBook1]; // Creates array to find the oldest edition

const oldestBook = Book.getOldestBook(booksArray); // Call the method to find the oldest edition

console.log("The oldest book is:", oldestBook);

const eBookFromBook = EBook.createBookInstance(volume1, "pdf"); // Creates eBook instance from Book instance and string

eBookFromBook.printInfo();
