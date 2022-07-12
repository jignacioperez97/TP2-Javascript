// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let fraseCompleta = "";

while (confirm("¿Quiere ingresar palabras?")) {
  let texto = prompt("Ingrese una palabra");
  fraseCompleta = fraseCompleta + " - " + texto;
}
let fraseCompletaFinal = fraseCompleta.slice(3);
document.write(fraseCompletaFinal);
