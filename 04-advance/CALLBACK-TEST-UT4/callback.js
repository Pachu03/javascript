export function sumArraysCallback(numbers1, numbert2, callback) {
  return callback(numbers1, numbert2);
}

export function sumArray(numbers1, numbert2) {
  const intialValue = 0;
  const arrayNum = [...numbers1, ...numbert2];
  let result = arrayNum.reduce((acumulador, current) => {
    return acumulador + current;
  }, intialValue);

  return result;
}

export function concatTask(listString, callback) {
  return callback(listString);
}

export function concatList(listString) {
  let result = "";

  listString.forEach((element) => {
    result += " " + element;
  });

  console.log(result.trim());

  return "My task list:" + result;
}

export function doubleArray(array, callback) {
  return callback(array);
}

export function doubleElementArray(array) {
  return setTimeout(() => {
    let newArray = [];
    array.forEach((element) => {
      newArray.push(element * element);
    });
  }, 6000);
}
