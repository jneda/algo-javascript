const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const convertBtn = document.querySelector("input[type='button']");

convertBtn.addEventListener("click", function () {
  if (celsius.value !== "") {
    fahrenheit.value = celsius.value * 9/5 + 32;
  }
});
