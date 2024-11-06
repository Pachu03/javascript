import { Person } from "./Person";

describe("OOP", () => {
    it("should get name, surname, country and age", () => {
      const person = new Person("Fran", "Fernandez", "España", "21");
      expect(person.name).toBe("Fran");
      expect(person.surname).toBe("Fernandez");
      expect(person.country).toBe("España");
      expect(person.age).toBe("21");
    });
  
    it("should set name = Peter, surname = Jackson, country = CANADA and age = 39", () => {
      const person = new Person("Fran", "Fernandez", "España", "21");
      person.name = "Peter";
      person.surname = "Jackson";
      person.country = "CANADA";
      person.age = "39";
      
      expect(person.name).toBe("Peter");
      expect(person.surname).toBe("Jackson");
      expect(person.country).toBe("CANADA");
      expect(person.age).toBe("39");
    });
  });
  
