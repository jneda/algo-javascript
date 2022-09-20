// 1. saisir une nouvelle chaîne !!! doit être de longueur 1 ou +
// 2. créer une nouvelle chaîne
// 3. intervertir le premier et le dernier caractère
// 4. afficher le résultat

let chaine = prompt("Saisis un texte :");

if (chaine.length === 1) {
  document.write(chaine); // on affiche
} else {
  let carDebut = chaine.charAt(0); // on trouve le premier caractère (index 0)

  let indexFin = chaine.length - 1;
  let carFin = chaine.charAt(indexFin); // on trouve le dernier caractère (index longueur de la chaine - 1)

  let partieMilieu = chaine.slice(1, indexFin); // on copie les lettres de la deuxième à l'avant-dernière

  let chaineResultat = carFin.concat(partieMilieu, carDebut); // on concatène tout ça dans l'ordre souhaité
  document.write(chaineResultat); // on affiche
}
