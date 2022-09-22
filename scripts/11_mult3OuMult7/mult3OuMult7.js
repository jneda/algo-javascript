/* 11/ Ecrivez un programme JavaScript pour vérifier si un nombre positif donné
est un multiple de 3 ou un multiple de 7. */

// fonctions utilitaires

function estMultipleDe(n, diviseur) {
  return n % diviseur === 0;
}

function mult3OuMult7(n) {
  return estMultipleDe(n, 3) || estMultipleDe(n, 7);
}

// programme principal

const nombreSaisi = parseInt(prompt("Saisis un entier :"));

// formation de la chaîne affichée en retour par concaténation

let result = `${nombreSaisi} `;

if (mult3OuMult7(nombreSaisi)) {
  result += "est ";
} else {
  result += "n'est pas ";
}

result += "un multiple de 3 ou un multiple de 7";

// on affiche

document.write(result);
