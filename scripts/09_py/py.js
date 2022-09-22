// 1. demander une chaine
// 2. si chaine commence pas par Py, ajouter Py devant
// 3. afficher la chaîne


let chaine= prompt("Saisir une chaîne :");

if (!(chaine.toLowerCase().startsWith("py"))){
  chaine = "Py" + chaine;
}  

document.write(chaine);

// v1
// 1. demander une chaine
// 2. si chaine commence par Py, l'afficher
// 3. sinon l'afficher en ajoutant Py devant
/* 
let chaine= prompt("Saisir une chaîne :");

if (chaine.startsWith("Py")){
  document.write(chaine);
}  else {
  document.write("Py" + chaine);
}
 */
