export class Book {
    #title;
    #author;
    published;
  
    constructor(title, author, published) {
      this.#title = title;
      this.#author = author;
      this.published = published;
    }
  
    // Getters
    get title() {
      return this.#title;
    }
  
    get author() {
      return this.#author;
    }
  
    get published() {
      return this.published;
    }
  
    // Setters
    set title(value) {
      this.title = value;
    }
  
    set author(value) {
      this.author = value;
    }
  
    set published(value) {
      this.published = value;
    }
  }
  