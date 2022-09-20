// 1. demander une chaine
// 2. si chaine commence pas par Py, ajouter Py devant
// 3. afficher la chaîne


let chaine= prompt("Saisir une chaîne :");

if (!(chaine.startsWith("Py"))){
  chaine = "Py" + chaine;
}  

document.write(chaine);
