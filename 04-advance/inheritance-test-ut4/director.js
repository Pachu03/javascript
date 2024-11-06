export class Director {
  #name;
  #nationality;
  #birth;
  #notableFilmography;

  constructor(name, nationality, birth, notableFilmography) {
    this.#name = name;
    this.#nationality = nationality;
    this.#birth = birth;
    this.#notableFilmography = notableFilmography;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get nationality() {
    return this.#nationality;
  }

  set nationality(newNationality) {
    this.#nationality = newNationality;
  }

  get birth() {
    return this.#birth;
  }

  set birth(newBirth) {
    this.#birth = newBirth;
  }

  get notableFilmography() {
    return this.#notableFilmography;
  }

  set notableFilmography(newNotableFilmography) {
    this.#notableFilmography = newNotableFilmography;
  }
}
