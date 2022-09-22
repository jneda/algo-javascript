/* 8/ Écrire un programme JavaScript pour vérifier deux nombres donnés par
l’utilisateur et retourner vrai si l'un des nombres est 50 ou si leur somme
est 50 */

// boucle de saisie utilisateur

const nombres = [];

for (let i = 1; i < 3; i++) {
  const nombreSaisi = prompt(`Saisis le nombre n°${i}`);
  nombres.push(parseInt(nombreSaisi));
}

// on évalue les conditions

const contient50 = nombres.includes(50);
const sommeEst50 = nombres.reduce((a, b) => a + b) === 50;


// et la conjonction des deux

let result = false;
if (contient50 || sommeEst50) {
  result = true;
}

// on affiche

document.write(
  `50 est ou bien l'un des nombres que tu as saisi, ou leur somme : ${result}`
);
