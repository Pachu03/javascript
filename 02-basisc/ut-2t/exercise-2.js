//Declaracion de las constantes
const MSGALERT = "This is am alert message, click me to move on";
const MSGALERTCONFIRM =
  "Show me in an alert if you clicked on ok or false\nEither OK or Cancel.";
const MSGALERTTRUE = "You clicked on true click me to move on!!!";
const MSGALERTFALSE = "You clicked on false click me to move on!!!";
const MSGPROMPT = "Show me in an alert the message typed";
const MSGPROMPTALERT = "You typed ";
const MSGPROMPTALERT2 = " click me to move on!!!";

//Declaracion del evento que crea alerts, prompt y confirm
alert(MSGALERT);

if (confirm(MSGALERTCONFIRM) == true) {
  alert(MSGALERTTRUE);
} else {
  alert(MSGALERTFALSE);
}

let acept = prompt(MSGPROMPT);
if (acept != null) {
  alert(MSGPROMPTALERT + acept + MSGPROMPTALERT2);
}
