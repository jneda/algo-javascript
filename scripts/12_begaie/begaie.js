/* 12/ Ecrivez un programme JavaScript pour créer une nouvelle chaîne à partir
d'une chaîne donnée en prenant les 3 derniers caractères et en les ajoutant
à la fois au début et à l'arrière. La longueur de la chaîne doit être
de 3 ou plus. */

function begaie(chaine) {
  // on vérifie la condition
  if (chaine.length < 4) {
    return;
  }

  const bribe = chaine.slice(-3);

  return bribe.concat(chaine, bribe);
}

// tests

const log = x => console.log(x + " => " + begaie(x));

log("coucou !");
log("bah");
log("Karine alla en Irak");
