const objetoLiteral = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Avenida Jose de los palotes",
    ciudad: "Malaga",
    codigoPostal: 12345,
  },
  trabajo: {
    puesto: "Desarrollador",
    empresa: "Lenovo",
    añosExperiencia: 5,
  },
  hobbies: ["Fumar", "Beber", "Viajar"],
  amigos: [
    {
      nombre: "Carlos",
      edad: 28,
    },
    {
      nombre: "María",
      edad: 32,
    },
  ],
  activo: true,
};

for (let i in objetoLiteral){
  console.log(i);
}

console.log("---------------");

for (let i in objetoLiteral){
  console.log(objetoLiteral[i]);
}