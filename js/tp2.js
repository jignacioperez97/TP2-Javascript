// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
// si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = prompt("Ingrese su edad");

while (edad >= 18) {
  document.write("Ya puede conducir");
}
