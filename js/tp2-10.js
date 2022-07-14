/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

const filas = parseInt(prompt("Ingrese el numero de filas"));
const columnas = parseInt(prompt("Ingrese un numero de columnas"));
let resultado = filas * columnas;

console.log(filas);
console.log(columnas);

document.write(`<table>
    <tbody>`);

for (let inidiceFila = 0; inidiceFila < filas; inidiceFila++) {
  document.write(`<tr>`);
  for (let indiceColumna = 0; indiceColumna < columnas; indiceColumna++) {
    document.write(`<td>${resultado}</td>`);
    resultado--; //resultado = resultado - 1
  }
  document.write(`</tr>`);
}

document.write(`
    </tbody>
    </table>`);
