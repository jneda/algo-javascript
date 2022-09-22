/* 17/ Écrivez un code JavaScript pour diviser un tableau* donné d'entiers
positifs en deux parties. Le premier élément va à la première partie,
le deuxième élément va à la deuxième partie et le troisième élément va à la
première partie et ainsi de suite. Calculez maintenant la somme de deux parties
et stockez-la dans un tableau de taille deux.
*Tableau de taille 10 */

function somme(tableau) {
  // retourne la somme de toutes les valeurs du tableau
  return tableau.reduce((a, b) => a + b);
}

// fonction principale

function sommesSeparees(tableau) {
  if (tableau.length !== 10) {
    return;
  }

  // on répartit les valeurs entre deux tableaux

  const tab1 = [];
  const tab2 = [];

  for (let i = 0; i < 10; i++) {
    // index pair -> tab1, index impair -> tab2
    if (i % 2 === 0) {
      tab1.push(tableau[i]);
    } else {
      tab2.push(tableau[i]);
    }
  }

  // on retourne un tableau contenant le total des valeurs
  // pour chaque tableau
  return [somme(tab1), somme(tab2)];
}

// test

const log = x => console.log(x + " => " + sommesSeparees(x));

log([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
log([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]);
log([1, 0, 1, 0, 1, 0, 1, 0, 1, 0]);