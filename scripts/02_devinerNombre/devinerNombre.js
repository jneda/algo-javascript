/* 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random

1. Générer nombre aléatoire entre 1 et 10
2. Saisir nombre en entrée
3. If entrée = nbr aléatoire > afficher "Bon travail"
4. Else afficher "Pas de correspondance"
*/

// 1. Générer un nombre aléatoire
const randomNumber = Math.floor(Math.random() * 10) + 1;

// 2. Saisir nbr en entrée
const guess = Number(prompt("Donne-moi un nombre entre 1 et 10"));

// 3 et 4 : comparer nombre aléatoire et nombre utilisateur
// afficher le résultat approprié
if (guess === randomNumber) {
  document.write("Bon travail ;)");
} else {
  document.write("Pas de correspondance --");
}

// Debug
console.log("randomNumber : " + randomNumber + " guess : " + guess);