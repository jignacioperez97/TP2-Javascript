/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 */

let numero = prompt("Coloque el número de repeticiones");

if (numero > 0 && numero <= 50) {
  let repeticion;
  let numeroRepeticion;

  for (numeroRepeticion = 0; numeroRepeticion <= numero; numeroRepeticion++) {
    for (repeticion = 1; repeticion <= numeroRepeticion; repeticion++) {
      document.write(numeroRepeticion);
    }
    document.write("<br>");
  }
}
