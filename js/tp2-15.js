/* 15- Realiza un script que cuente el número de vocales que tiene un texto. */

let texto = prompt("Ingrese una frase");
let letras = 0;
longitud = texto.length;
let contador = 0;

while (letras < longitud) {
  letras++;
  if (
    texto.charAt(letras) === "a" ||
    texto.charAt(letras) === "e" ||
    texto.charAt(letras) === "i" ||
    texto.charAt(letras) === "o" ||
    texto.charAt(letras) === "u"
  ) {
    contador++;
  }
}

document.write("Número de vocales: " + contador);
