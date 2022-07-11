// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
// si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = prompt("Ingrese su edad");

if (edad >= 18) {
  document.write("Ya puede conducir");
} else {
  document.write("No puede conducir");
}

let cantidadMates = 20;

do {
  document.write("<br>Mates cebados: " + cantidadMates);
  cantidadMates--;
} while (cantidadMates >= 1);
