// 1. saisir une nouvelle chaîne !!! doit être de longueur 1 ou +
// 2. créer une nouvelle chaîne
// 3. intervertir le premier et le dernier caractère
// 4. afficher le résultat

let chaine = prompt("Saisis un texte :");

if (chaine.length > 1) {
  // on saute la boucle s'il n'y a qu'un seul caractère
  const cars = chaine.split(""); // transformation de la chaîne en tableau de caractères

  // interversion de la première et de la dernière
  const temp = cars[0];
  cars[0] = cars[cars.length - 1];
  cars[cars.length - 1] = temp;

  chaine = cars.join(""); // reconstitution de la chaîne à partir du tableau modifié
}

document.write(chaine); // on affiche
