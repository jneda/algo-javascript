/* 7/ Ecrivez un programme JavaScript pour calculer la différence absolue entre
un nombre spécifié et 19. On renvoie le triple de leur différence absolue si le
nombre spécifié est supérieur à 19.

NB: on calcule nombre donné - 19 et on ne revoie que si nécessaire */

const nombre = parseInt(prompt("Saisir un entier :"));

if (nombre > 19) {
  document.write(`${nombre} - 19 = ${Math.abs(nombre - 19) * 3}`);
}

// superflu selon l'énoncé

/*
else {
  document.write(`${nombre} < 19`);
}
*/
