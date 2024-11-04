import {Book} from "./book";

describe("OOP", () => {
    it("should get title, author, and published for La vida del lazarillo de Tormes", () => {
      const book = new Book("La vida del lazarillo de Tormes", "Anonymous", "1554");
      expect(book.title).toBe("La vida del lazarillo de Tormes");
      expect(book.author).toBe("Anonymous");
      expect(book.published).toBe("1554");
    });
  
    it("should get title, author, and published for The NeverEnding Story", () => {
      const book = new Book("The NeverEnding Story", "Michael Ende", "1984");
      expect(book.title).toBe("The NeverEnding Story");
      expect(book.author).toBe("Michael Ende");
      expect(book.published).toBe("1984");
    });
  
    it("should get title, author, and published for The Lord of the Rings", () => {
      const book = new Book("The Lord of the Rings", "J. R. R. Tolkien", "1954");
      expect(book.title).toBe("The Lord of the Rings");
      expect(book.author).toBe("J. R. R. Tolkien");
      expect(book.published).toBe("1954");
    });
  
    it("should get title, author, and published for Beowulf", () => {
      const book = new Book("Beowulf", "Anonymous", "900");
      expect(book.title).toBe("Beowulf");
      expect(book.author).toBe("Anonymous");
      expect(book.published).toBe("900");
    });
  });
  