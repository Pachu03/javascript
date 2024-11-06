export class Birth {
  #date;
  #place;

  constructor(date, place) {
    this.#date = date;
    this.#place = place;
  }

  get date() {
    return this.#date;
  }

  set date(newDate) {
    this.#date = newDate;
  }

  get place() {
    return this.#place;
  }

  set place(newPlace) {
    this.#place = newPlace;
  }
}
