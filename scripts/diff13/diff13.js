/*
1. Saisir nombre
2. Calculer la différence nombre - 13
3. Si nombre > 13 retourner double de différence absolue
*/

const nombre = Number(prompt("Saisir un nombre :"));
const diff = nombre - 13;

if (nombre > 13) {
  document.write("Le double de la différence absolue de " + nombre + " et 13 est " + 2 * Math.abs(diff) + ".");
}