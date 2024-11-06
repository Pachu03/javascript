const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];

/**
 * Usando Destructuración de arrays,
 * debes devolver todas las tecnologías
 * @returns
 */
export const getAllTechnologies = () => {
  let [, tecnologias] = student;
  return tecnologias;
};

/**
 * Usando Destructuración de arrays,
 * debes devolver todos los valores
 * @returns
 */
export const getAllValues = () => {
  let [, , valores] = student;
  return valores;
};

/**
 * Usando Destructuración de arrays,
 * debes devolver solo React
 * @returns
 */
export const getReact = () => {
  let [, [, , , React]] = student;
  return React;
};

/**
 * Usando Destructuración de arrays,
 * debes devolver CSS y 85
 * @returns
 */
export const getCSSAnd85 = () => {
  let [, [, CSS], [, num]] = student;
  return [CSS, num];
};
/*****************************************************
 * ***************************************************
 ******************************************************/
const books = [
  {
    title: "La vida del lazarillo de Tormes",
    author: "Anonymous",
    published: "1554",
  },
  {
    title: "The NeverEnding Story",
    author: "Michael Ende",
    published: "1984",
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    published: "1954",
  },
  {
    title: "Beowulf",
    author: "Anonymous",
    published: "900",
  },
];

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el título del primer libro
 * @returns
 */
export const getTitleFirstBook = () => {
  let [{ title }] = books;
  return title;
};

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el año de publicación del segundo libro
 * @returns
 */
export const getPublishedSecondBook = () => {
  let [{}, { published }] = books;
  return published;
};

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el título y el autor del último libro
 * @returns
 */
export const getAuthorsAndTitleLastBook = () => {
  let { title, author } = books[books.length - 1]; 
  return [ title, author ];
};
