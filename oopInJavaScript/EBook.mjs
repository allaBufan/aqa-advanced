import { Book } from "./Book.mjs"; // Imports parent class

export class EBook extends Book {
  constructor(name, author, year, fileFormat) {
    // Creates child class with one more protected property
    super(name, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat; // Access to protected property
  }

  set fileFormat(valueF) {
    if (valueF === "") {
      // Validates if the fileFormat is empty
      console.log("File format is empty");
      return;
    }
    this._fileFormat = valueF;
  }

  printInfo() {
    console.log(this.name, this.author, this.year, this.fileFormat);
  }

  static createBookInstance(bookInstance, fileFormat) {
    // Creates EBook instance from the Book instance
    return new EBook(
      bookInstance.name,
      bookInstance.author,
      bookInstance.year,
      fileFormat
    );
  }
}
