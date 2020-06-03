const celciusInput = document.querySelector("#celcius > input")
const fahrenheitInput = document.querySelector("#fahrenheit > input")
const kelvinInput = document.querySelector("#kelvin > input")

function celciusConvertor(){

  const cTemp = parseFloat(celciusInput.value);
  const fTemp = (cTemp * (9/5) + 32);
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = fTemp;
  kelvinInput.value = kTemp;
}

function fahrenheitConvertor() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5/9);
}

celciusInput.addEventListener("input",celciusConvertor);
fahrenheitInput.addEventListener("input", fahrenheitConvertor);
