/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

let texto = prompt("Ingrese una frase");
let letras = 0;
longitud = texto.length;
let contador;
let alreves = "";

while (letras < longitud) {
  contador = texto.charAt(letras);
  alreves = contador + alreves;
  letras++;
}
document.write(alreves);
