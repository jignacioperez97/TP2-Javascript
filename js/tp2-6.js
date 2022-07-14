/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
 */

let numero;
let rep;

for (numero = 1; numero <= 30; numero++) {
  for (rep = 0; rep < numero; rep++) {
    document.write(numero);
  }
  document.write("<br>");
}
