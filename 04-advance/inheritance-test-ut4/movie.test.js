import { Birth } from "./birth.js";
import { Director } from "./director.js";
import { Movie } from "./movie.js";

describe("Inheritance - Birth class", () => {
  it("should get date and place of birth of Peter Jackson", () => {
    const birth = new Birth(
      "31 de octubre de 1961",
      "Pukerua Bay, Nueva Zelanda"
    );
    expect(birth.date).toBe("31 de octubre de 1961");
    expect(birth.place).toBe("Pukerua Bay, Nueva Zelanda");
  });
});

describe("Inheritance - Director class", () => {
  it("should get name, nationality and notableFilmography for Director", () => {
    const birth = new Birth(
      "31 de octubre de 1961",
      "Pukerua Bay, Nueva Zelanda"
    );
    const director = new Director("Peter Jackson", "Neozelandés", birth, [
      "El Señor de los Anillos",
      "El Hobbit",
      "King Kong",
    ]);
    expect(director.name).toBe("Peter Jackson");
    expect(director.nationality).toBe("Neozelandés");
    expect(director.notableFilmography).toEqual([
      "El Señor de los Anillos",
      "El Hobbit",
      "King Kong",
    ]);
  });
});

describe("Inheritance - Movie class", () => {
  it("should get title, year, genre, duration, rating and synopsis for El Señor de los Anillos", () => {
    const birth = new Birth(
      "31 de octubre de 1961",
      "Pukerua Bay, Nueva Zelanda"
    );
    const director = new Director("Peter Jackson", "Neozelandés", birth, [
      "El Señor de los Anillos",
      "El Hobbit",
      "King Kong",
    ]);
    const movie = new Movie(
      "El Señor de los Anillos: La Comunidad del Anillo",
      director,
      2001,
      "Fantasía",
      178,
      9.2,
      "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro."
    );

    expect(movie.title).toBe(
      "El Señor de los Anillos: La Comunidad del Anillo"
    );
    expect(movie.year).toBe(2001);
    expect(movie.genre).toBe("Fantasía");
    expect(movie.duration).toBe(178);
    expect(movie.rating).toBe(9.2);
    expect(movie.synopsis).toBe(
      "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro."
    );
  });
});
