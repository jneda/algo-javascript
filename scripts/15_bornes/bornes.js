/* 15/ Ecrivez un programme JavaScript pour vérifier si deux nombres sont
tous deux dans la plage 40..60 ou dans la plage 70..100 inclus. */

// gestion de la saisie par l'utilisateur

function saisie() {
  const entiers = [];

  for (let i = 1; i < 3; i++) {
    let entree;

    do {
      entree = parseInt(prompt(`Saisis l'entier n°${i}`));
    } while (isNaN(entree));

    entiers.push(entree);
  }

  return entiers;
}

// fonctions utilitaires

function comprisEntre(n, bornes) {
  const minOk = n >= bornes[0];
  const maxOk = n <= bornes[1];
  // console.log(`${n} dans ${bornes} : minOk ? ${minOk} maxOk ? ${maxOk}`);
  return minOk && maxOk;
}

function paireCompriseEntre(paire, bornes) {
  const premierOk = comprisEntre(paire[0], bornes);
  const secondOk = comprisEntre(paire[1], bornes);
  // console.log(`premierOk ? ${premierOk} | secondOk ? ${secondOk}`);
  return premierOk && secondOk;
}

// fonction principale

function bornes(entiers) {
  return paireCompriseEntre(entiers, [40, 60]) ||
    paireCompriseEntre(entiers, [70, 100]);
}

// test manuel

while (true) {
  console.log(bornes(saisie()));
}