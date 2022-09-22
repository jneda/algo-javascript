// TODO: vérifier le comportement des input type number quand on entre un nombre décimal

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const convertBtn = document.querySelector("input[type='button']");

function celsiusToFahrenheit() {
  if (celsius.value !== "") {
    fahrenheit.value = celsius.value * 9 / 5 + 32;
  }
}

convertBtn.addEventListener("click", celsiusToFahrenheit);
