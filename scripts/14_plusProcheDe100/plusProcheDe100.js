/* 14/ Ecrivez un programme JavaScript pour trouver une valeur la plus proche de
100 à partir de deux valeurs entières différentes données par l’utilisateur */

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

function diffAbsolue(a, b) {
  return Math.abs(a - b);
}

function plusProcheDe100(entiers) {
  return diffAbsolue(entiers[0], 100) <= diffAbsolue(entiers[1], 100)
    ? entiers[0]
    : entiers[1];
}

while (true) {
  console.log(plusProcheDe100(saisie()));
}