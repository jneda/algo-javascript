// TODO :  gérer les arrondis (cf. 100 °F => 37,7777777777778 °C)

// fonctions de calcul de la conversion

function celsiusToFahrenheit() {
  return (fahrenheit.value = (celsius.value * 9) / 5 + 32);
}

function fahrenheitToCelsisus() {
  return (celsius.value = ((fahrenheit.value - 32) * 5) / 9);
}

// utilitaire

function isEmptyInput(inputElt) {
  return inputElt.value === "";
}

// fonction de gestion de l'état de l'application

function switchAppState() {
  if (!waiting && (isEmptyInput(fahrenheit) || isEmptyInput(celsius))) {
    waiting = true;
  }

  if (waiting) {
    if (!isEmptyInput(celsius)) {
      fahrenheit.value = celsiusToFahrenheit();
    } else if (!isEmptyInput(fahrenheit)) {
      celsius.value = fahrenheitToCelsisus();
    }

    waiting = false;
  }
}

// on récupère les références des éléments HTML

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const convertBtn = document.querySelector("input[type='button']");

// initialisation variable d'état

let waiting = true;

// on attache l'event listener à l'élément input type button
convertBtn.addEventListener("click", switchAppState);
