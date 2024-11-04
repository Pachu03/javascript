const persons = [
  { name: "Juan", age: 25 },
  { name: "María", age: 30 },
  { name: "Carlos", age: 22 },
  { name: "Luisa", age: 28 },
  { name: "Ana", age: 35 },
];

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle FOR
 **/
export const getNameWithFor = () => {
  let personsName = [];
  for (let index = 0; index < persons.length; index++) {
    personsName.push(persons[index].name);
  }
  return personsName;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle DO WHILE
 **/
export const getNameWithDoWhile = () => {
  let personsName = [];
  let num = 0;
  do {
    personsName.push(persons[num].name);
    num++;
  } while (num < persons.length);
  return personsName;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle WHILE
 **/
export const getNameWithWhile = () => {
  let personsName = [];
  let num = 0;
  while (num < persons.length) {
    personsName.push(persons[num].name);
    num++;
  }
  return personsName;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle FOR
 **/
export const getAgeWithFor = () => {
  let personsEdad = [];
  for (let index = 0; index < persons.length; index++) {
    personsEdad.push(persons[index].age);
  }
  return personsEdad;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle DO WHILE
 **/
export const getAgeWithDoWhile = () => {
  let personsEdad = [];
  let num = 0;
  do {
    personsEdad.push(persons[num].age);
    num++;
  } while (num < persons.length);
  return personsEdad;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle WHILE
 **/
export const getAgeWithWhile = () => {
  let personsEdad = [];
  let num = 0;
  while (num < persons.length) {
    personsEdad.push(persons[num].age);
    num++;
  }
  return personsEdad;
};
