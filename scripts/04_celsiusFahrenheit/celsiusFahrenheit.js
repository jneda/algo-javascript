// fonctions de calcul de la conversion

function celsiusToFahrenheit() {
  return (fahrenheit.value = (celsius.value * 9) / 5 + 32);
}

function fahrenheitToCelsisus() {
  return (celsius.value = ((fahrenheit.value - 32) * 5) / 9);
}

// utilitaires

function isEmptyInput(inputElt) {
  return inputElt.value === "";
}

function setInputValue(inputElt, value) {
  inputElt.value = value;
  console.log(typeof value);
}

// fonction de gestion de l'état de l'application

function switchAppState() {
  if (!waiting && (isEmptyInput(fahrenheit) || isEmptyInput(celsius))) {
    waiting = true;
  }

  if (waiting) {
    if (!isEmptyInput(celsius)) {
      setInputValue(fahrenheit, celsiusToFahrenheit());
    } else if (!isEmptyInput(fahrenheit)) {
      setInputValue(celsius, fahrenheitToCelsisus());
    }

    waiting = false;
  }
}

// on récupère les références des éléments HTML

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const convertBtn = document.querySelector("input[type='button']");

// variable d'état

let waiting = true;

// on attache l'event listener à l'élément input type button
convertBtn.addEventListener("click", switchAppState);
