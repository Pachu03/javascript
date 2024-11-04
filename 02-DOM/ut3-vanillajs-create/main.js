const texts = [
  "The input min and max attributes",
  "The min and max attributes specify the minimun and maximun values for an input element.",
  "Enter a date before 1980-01-01:",
  "Enter a date after 2000-01-01:",
  "Quatity (beteween 1 and 5)",
];

const body = document.body;
let container = document.createElement("div");
let h1 = document.createElement("h1");
let br = document.createElement("br");
let p = document.createElement("p");
let br2 = document.createElement("br");
let form = document.createElement("form");
let label = document.createElement("label");
let input = document.createElement("input");
let br3 = document.createElement("br");
let label2 = document.createElement("label");
let input2 = document.createElement("input");
let br4 = document.createElement("br");
let label3 = document.createElement("label");
let input3 = document.createElement("input");
let br5 = document.createElement("br");
let input4 = document.createElement("input");

h1.textContent = texts[0];
p.textContent = texts[1];
label.textContent = texts[2];
label2.textContent = texts[3];
label3.textContent = texts[4];

label.for = "datemax";
input.type = "date";
input.id = "datemax";
input.name = "datemax";
input.max = "1979-12-31";

label2.for = "datemin";
input2.type = "date";
input2.id = "datemin";
input2.name = "datemin";
input2.max = "2000-01-02";

label3.for = "quantity";
input3.type = "number";
input3.id = "quantity";
input3.name = "quantity";
input3.max = "5";
input3.min = "1";

input4.type="submit";
input4.value="Submint";

form.append(
  label,
  input,
  br3,
  label2,
  input2,
  br4,
  label3,
  input3,
  br5,
  input4
);

container.append(h1, br, p, br2, form);

body.append(container);
