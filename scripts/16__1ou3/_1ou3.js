/* 16/ Écrire un programme JavaScript pour tester si un tableau d'entiers de
longueur 2 contient 1 ou un 3 */

function _1ou3(tableau) {
  if (tableau.length !== 2) {
    return;
  }

  return tableau.includes(1) || tableau.includes(3);
}

const log = x => console.log(x + " => " + _1ou3(x));

log([]);
log([2, 4]);
log([1, 2]);
log([3, 2]);
log([1, 3]);
log([1, 2, 3]);
