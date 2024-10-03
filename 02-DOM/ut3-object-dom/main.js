const texts = [
  "This is a Heading",
  "This is a paragraph",
  "This is a another paragraph",
];
let img = document.createElement("img");
img.src = "assests/img_la.jpg";

let h1 = document.createElement("h1");
h1.textContent = texts[0];

let p = document.createElement("p");
p.textContent = texts[1];

let p2 = document.createElement("p");
p2.textContent = texts[2];

document.body.appendChild(img);
document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(p2);
