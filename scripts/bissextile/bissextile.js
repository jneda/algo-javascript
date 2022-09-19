/*
Consigne : écrire un programme qui détermine si l'année donnée en entrée
est bissextile ou non.

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
// V1 : les expressions sont dans la condition.

if (
  (annee % 4 === 0 && // Multiple de 4
    !(annee % 100 === 0)) || // 4 ET pas de 100 ?
  annee % 400 === 0 // OU multiple de 400 ?
) {
  message += "bissextile.";
} else {
  message += "non bissextile.";
}
 */

// V2 : on utilise des variables booléennes.
const estMultipleDe4 = annee % 4 === 0;
const estMultipleDe100 = annee % 100 === 0;
const estMultipleDe400 = annee % 400 === 0;

if (
  (estMultipleDe4 && // Multiple de 4
    !estMultipleDe100) || // 4 ET pas de 100 ?
  estMultipleDe400 // OU multiple de 400 ?
) {
  message += "bissextile.";
} else {
  message += "non bissextile.";
}

/* 
// V3: on teste d'abord si l'année n'est pas bissextile.
const estMultipleDe4 = annee % 4 === 0;
const estMultipleDe100 = annee % 100 === 0;
const estMultipleDe400 = annee % 400 === 0;

if (! // Si PAS
  (estMultipleDe4 && // Multiple de 4
    !estMultipleDe100) || // 4 ET pas de 100 ?
    estMultipleDe400 // OU multiple de 400 ?
) {
  message += "non ";
}
message += "bissextile.";
 */

// On affiche le résultat.
document.write("<p>" + message + "</p>");
