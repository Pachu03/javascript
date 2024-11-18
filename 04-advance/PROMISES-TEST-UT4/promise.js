export const myPromiseId = (database, num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = database.user.find((user) => user.id === num);
      if (user) {
        resolve(user.id);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
};

export const myPromiseUser = (database, name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = database.user.find((user) => user.name === name);
      if (user) {
        resolve(user.name);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
};

export const myPromiSesquared = (array) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (array.length === 0) {
        reject("The length of the array is 0");
        return;
      }

      let newArray = [];
      array.forEach((element) => {
        newArray.push(element * element);
      });

      resolve(newArray);
    }, 2000);
  });
};
