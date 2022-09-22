// TODO: vérifier le comportement des input type number quand on entre un nombre décimal

// on récupère les références des éléments HTML
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const convertBtn = document.querySelector("input[type='button']");

// fonction de calcul de la conversion
function celsiusToFahrenheit() {
  if (celsius.value !== "") {
    fahrenheit.value = celsius.value * 9 / 5 + 32;
  }
}

// on attache l'event listener à l'élément input type button
convertBtn.addEventListener("click", celsiusToFahrenheit);
