/*
1. Saisir entier1
2. Saisir entier2
3. Additionner les deux
4. Si entier1 = entier2 multiplier somme par 3
*/

const int1 = parseInt(prompt("Saisir un premier entier"));
const int2 = parseInt(prompt("Saisir un deuxième entier"));

let result = int1 + int2;
if (int1 === int2) {
  document.write("<p>Vos numéros sont identiques. ");
  result *= 3; // équivalent à result = result * 3
}
document.write("Votre résultat est " + result + ".</p>");
