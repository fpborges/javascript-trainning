/**
This is a Book class object created to be consumed and generate 5 different books
 */

class Book {
  //Attributes
  constructor(name, author, genre, price, pagesNumber, selling) {
    (this.name = name),
      (this.author = author),
      (this.genre = genre),
      (this.price = price),
      (this.pagesNumber = pagesNumber);
    this.selling = selling;
  }
  //Methods
  changePrice(newPrice) {
    this.price = newPrice;
  }
  updateSelling(newNumber) {
    this.selling = newNumber;
  }
}

export default Book;
