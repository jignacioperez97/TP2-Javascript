/* 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter
 sin usar el método replace. 
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”. */

let frase = prompt("Escriba una frase");

let longitud = frase.length;
let numCaracter = 0;
let fraseCompleta;

while (numCaracter < longitud) {
  fraseCompleta = frase.charAt(numCaracter);
  numCaracter++;

  if (numCaracter == longitud - 1) {
    document.write(fraseCompleta);
  } else {
    document.write(fraseCompleta + "-");
  }
}
