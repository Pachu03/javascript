import * as promise from "./promise";

const database = {
  user: [
    { id: 1, name: "Usuario 1" },
    { id: 2, name: "Usuario 2" },
    { id: 3, name: "Usuario 3" },
  ],
};

const array = [1, 4, 9, 16, 25];

describe("Database Promises - selectUserById", () => {
  it("should get user with id = 2", () => {
    return promise.myPromiseId(database, 2).then((result) => {
      expect(result).toBe(2);
    });
  });

  it("should get 'User not found' with id = 5", () => {
    return promise.myPromiseId(database, 5).catch((error) => {
      expect(error).toBe("User not found");
    });
  });
});

describe("Database Promises - selectUserByName", () => {
  it("should gets user with user = Usuario 3", () => {
    return promise.myPromiseUser(database, "Usuario 3").then((result) => {
      expect(result).toBe("Usuario 3");
    });
  });
  it("should gets User not found with name = Jhon", () => {
    return promise.myPromiseUser(database, "Jhon").catch((error) => {
      expect(error).toBe("User not found");
    });
  });
});

describe("Calculate Pow Promises", () => {
  it("should get [1,4,9,16,25] with [1,2,3,4,5]", () => {
    const array = [1, 2, 3, 4, 5];
    return promise.myPromiSesquared(array).then((result) => {
      expect(result).toEqual([1, 4, 9, 16, 25]);
    });
  });

  it("should get 'The length of the array is 0' with []", () => {
    const array = [];
    return promise.myPromiSesquared(array).catch((error) => {
      expect(error).toBe("The length of the array is 0");
    });
  });
});
