export class Movie {
    #title;
    #director;
    #year;
    #genre;
    #duration;
    #rating;
    #synopsis;
  
    constructor(title, director, year, genre, duration, rating, synopsis) {
      this.#title = title;
      this.#director = director;
      this.#year = year;
      this.#genre = genre;
      this.#duration = duration;
      this.#rating = rating;
      this.#synopsis = synopsis;
    }
  
    get title() {
      return this.#title;
    }
  
    set title(newTitle) {
      this.#title = newTitle;
    }
  
    get director() {
      return this.#director;
    }
  
    set director(newDirector) {
      this.#director = newDirector;
    }
  
    get year() {
      return this.#year;
    }
  
    set year(newYear) {
      this.#year = newYear;
    }
  
    get genre() {
      return this.#genre;
    }
  
    set genre(newGenre) {
      this.#genre = newGenre;
    }
  
    get duration() {
      return this.#duration;
    }
  
    set duration(newDuration) {
      this.#duration = newDuration;
    }
  
    get rating() {
      return this.#rating;
    }
  
    set rating(newRating) {
      this.#rating = newRating;
    }
  
    get synopsis() {
      return this.#synopsis;
    }
  
    set synopsis(newSynopsis) {
      this.#synopsis = newSynopsis;
    }
  }
  