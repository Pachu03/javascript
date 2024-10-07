const BODY = document.body;

const div = document.createElement("div");
div.className = "list-group";

const CLASSA = "list-group-item list-group-item-action";

const textClass = [
  " list-group-item-primary",
  " list-group-item-secondary",
  " list-group-item-success",
  " list-group-item-danger",
  " list-group-item-warning",
  " list-group-item-info",
  " list-group-item-light",
  " list-group-item-dark",
];

const texts = [
  "A simple default list group item",
  "A simple primary list group item",
  "A simple secondary list group item",
  "A simple succes list group item",
  "A simple danger list group item",
  "A simple warning list group item",
  "A simple info list group item",
  "A simple light list group item",
  "A simple dark list group item",
];

let num = 0;

texts.forEach((text) => {
  console.log(text);
  const A = document.createElement("a");

  if (num === 0) {
    A.className = CLASSA;
  } else {
    A.className = CLASSA + textClass[num];
  }
  A.href = "#";
  A.textContent = text;

  div.append(A);
  num++;
});

BODY.className = "p-3 m-0 border-0 bd-example";

BODY.append(div);
