/* 13/ Ecrivez un programme JavaScript pour trouver le plus grand des trois
entiers donnés par l’utilisateur */

function saisir() {
  // TODO : empêcher l'utilisateur de saisir n'importe quoi ;)
  const entiers = [];
  let cpt = 1;

  do {
    const entree = parseInt(prompt(`Saisir l'entier n°${cpt}`));
    entiers.push(entree);
    cpt++;
  } while (cpt < 4);

  return entiers;
}

function max(nombres) {
  let max = nombres[0];

  for (let i = 1; i < nombres.length; i++) {
    let actuel = nombres[i];
    if (actuel > max) {
      max = actuel;
    }
  }

  return max;
}

function maxDe3() {
  const entiers = saisir();
  return max(entiers);
}

while (true) {
  console.log(maxDe3());
}