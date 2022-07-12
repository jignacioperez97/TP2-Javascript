// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let numerosTodos = parseInt(0);

while (confirm("¿Quiere introducir números?")) {
  let numero = parseInt(prompt("Introduzca un número"));
  if (numero >= 0) {
    numerosTodos = numerosTodos + numero;
  } else {
    alert("Este no es un número");
  }
}
document.write("La suma es " + numerosTodos);
