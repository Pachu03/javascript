let btnPrimary = document.querySelector(".btn-primary");
let btnSecondary = document.querySelector(".btn-secondary");
let btnSuccess = document.querySelector(".btn-success");
let btnDanger = document.querySelector(".btn-danger");
let btnWarning = document.querySelector(".btn-warning");
let btnInfo = document.querySelector(".btn-info");
let btnLight = document.querySelector(".btn-light");
let btnDark = document.querySelector(".btn-dark");

btnPrimary.addEventListener("click", function () {
  alert("Click Event");
});

btnSecondary.addEventListener("mouseenter", function () {
  alert("Mouse Enter Event");
});

btnSuccess.addEventListener("mouseup", (alertTexts) => {
  alert("Mouse Enter Event");
});

btnDanger.addEventListener("mouseleave", (alertTexts) => {
  alert("Mouse Leave Event");
});

btnWarning.addEventListener("mouseenter", function () {
  btnWarning.className = "btn btn-danger";
});

btnWarning.addEventListener("mouseleave", function () {
  btnWarning.className = "btn btn-warning";
});

btnInfo.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

btnLight.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});

btnDark.addEventListener("click", function () {
  for (let index = 0; index < 8; index++) {
    document.getElementsByTagName("button")[index].className = "btn btn-dark";
  }
});
