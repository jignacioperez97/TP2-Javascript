/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
 */

let edad1 = Number(prompt("Ingrese la edad 1"));
let nombre1 = prompt("Ingrese el nombre 1");

let edad2 = Number(prompt("Ingrese la edad 2"));
let nombre2 = prompt("Ingrese el nombre 2");

let edad3 = Number(prompt("Ingrese la edad 3"));
let nombre3 = prompt("Ingrese el nombre 3");

let maximo = Math.max(edad1, edad2, edad3);

if (maximo == edad1) {
  document.write("El mayor es " + nombre1);
} else if (maximo == edad2) {
  document.write("El mayor es " + nombre2);
} else if (maximo == edad3) {
  document.write("El mayor es " + nombre3);
}
