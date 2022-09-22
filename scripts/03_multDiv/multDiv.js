/* 
1. Demander nb1
2. Demander nb2
3. Afficher multiplication
4. Afficher division
*/

// 1 et 2
const nb1 = Number(prompt("Donne-moi un premier nombre"));
const nb2 = Number(prompt("Donne-moi un second nombre"));
// console.log(nb1, nb2);

// 3. afficher multiplication
// document.write("<p>Le produit de " + nb1 + " et " + nb2 + " est = " + (nb1 * nb2) + "</p><p>");
document.write(`<p>Le produit de ${nb1} et ${nb2} est = ${nb1 * nb2}</p><p>`);


// 4. afficher division
if (nb2 === 0) {
  document.write("On ne peut pas diviser par zéro ^^</p>");
} else {
  document.write("La division de " + nb1 + " par " + nb2 + " est = " + (nb1 / nb2) + "</p>");
}