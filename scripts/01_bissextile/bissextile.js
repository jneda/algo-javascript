/*
Consigne : écrire un programme qui détermine si l'année donnée en entrée
est bissextile ou non.
Contrainte : on n'a pas encore vu comment utiliser des fonctions.

La règle actuelle :
Depuis l'ajustement du calendrier grégorien, l'année est bissextile (comportant 366 jours)1 seulement si elle respecte l’un des deux critères suivants :

  C1 : l'année est divisible par 4 sans être divisible par 100 (cas des années qui ne sont pas des multiples de 100) ;
  C2 : l'année est divisible par 400 (cas des années multiples de 100).
Source : https://fr.wikipedia.org/wiki/Ann%C3%A9e_bissextile
*/


// On demande l'année à l'utilisateur et on convertit en nombre dans la foulée.
const annee = Number(prompt("Saisir une année :"));

// On stocke la partie invariable du message dans une variable.
let message = "L'année " + annee + " est ";

/*
// V5 : on fait sans les variable estMultipleDe

const condition1 = annee % 4 === 0 && !annee % 100 === 0;
const condition2 = annee % 400 === 0;

const estBissextile = condition1 || condition2;
*/

// V6 : on utilise une fonction

// fonction utilitaires

function estMultipleDe (n, diviseur) {
  return n % diviseur === 0;
}

function estBissextile(annee) {
  // debug
  /* console.log(`${annee} / 4 ? ${estMultipleDe(annee, 4)} ` +
  `${annee} / 100 ? ${estMultipleDe(annee, 100)} ` + 
  `${annee} / 400 ? ${estMultipleDe(annee, 400)}`); */
  
  return (estMultipleDe(annee, 4) && !estMultipleDe(annee, 100)) ||
  estMultipleDe(annee, 400)
}

// fonction principale

if (!estBissextile(annee)) {
  message += "non ";
}
message += "bissextile.";

// On affiche le résultat.
document.write("<p>" + message + "</p>");

// tests

function log(x) {
  console.log(`${x} est bissextile : ${estBissextile(x)}`);
}

for (let annee = 400; annee < 432; annee += 1) {
  log(annee);
}
