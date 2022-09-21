

// 3. intervertir le premier et le dernier caractère
// 4. afficher le résultat

let chaine = prompt("Saisis un texte :"); // 1. saisir une nouvelle chaîne !!! doit être de longueur 1 ou +

if (chaine.length > 1) { // on ne rentre dans la boucle que si la chaîne est longue d'au moins 2 caractères

  const carDebut = chaine.slice(0, 1); // on trouve le premier caractère (index 0)
  console.log("carDebut :" + carDebut);
  
  const carFin = chaine.slice(-1); // on trouve le dernier caractère
  console.log("carFin :" + carFin);


<<<<<<< HEAD
  const partieMilieu = chaine.slice(1, -1); // on copie les lettres de la deuxième à l'avant-dernière
  console.log("partieMilieu :" + partieMilieu);
  
  // 2. mettre à jour la chaîne
  chaine = carFin.concat(partieMilieu, carDebut); // on concatène tout ça dans l'ordre souhaité
} 

document.write(chaine); // on affiche
=======
  let chaineResultat = carFin.concat(partieMilieu, carDebut); // on concatène tout ça dans l'ordre souhaité
  
  document.write(chaineResultat); // on affiche
}
>>>>>>> e5fcce9e86c8078edf3f6f64ba11f0cba24d81a5
