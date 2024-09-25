console.log("%cWellcome to the application", "color:blue");
console.log("%cThis is an informational message.", "color:green");
console.warn("This is a warning. Be cautions.");
console.error("Errors! Sommething went wrong.");

const NAME1 = "Jhon";
const NAME2 = "Jane";
const NAME3 = "Bob";

const PEOPLE = [[NAME1, 30, "New York"],[NAME2, 25, "San Francisco"],[NAME3, 40, "Chicago"]];
console.table(PEOPLE);
