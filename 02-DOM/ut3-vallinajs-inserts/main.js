const texts = [
  "This is a Heading",
  "This is a paragraph",
  "This is a another paragraph",
];

let img = document.createElement("img");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let p2 = document.createElement("p");

img.src = "assests/img_la.jpg";
img.alt = "LA";

h1.textContent = texts[0];
p.textContent = texts[1];
p2.textContent = texts[2];

document.body.appendChild(img);
document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(p2);
