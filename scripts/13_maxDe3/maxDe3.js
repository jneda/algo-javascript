/* 13/ Ecrivez un programme JavaScript pour trouver le plus grand des trois
entiers donnés par l’utilisateur */

// fonction de saisie par l'utilisateur

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

// bonne vieille recherche du maximum

function max(nombres) {
  let max = nombres[0];

  
  // boucle for classique

  for (let i = 1; i < nombres.length; i++) {
    let actuel = nombres[i];
    if (actuel > max) {
      max = actuel;
    }
  }
 
  /* 
  // boucle for ... of

  for (const nombre of nombres) {
    if (nombre > max) {
      max = nombre;
    }
  }
  */

  return max;
}

// fonction principale

function maxDe3() {
  const entiers = saisir();
  return max(entiers);
}

// test manuel

while (true) {
  console.log(maxDe3());
}