function celsiusParaFahrenheit() {
  let celsius = document.getElementById('celsius').value;
  let calculo = Math.round(((celsius) * 9 / 5) + 32);

  document.write(`Em Fahrenheit ${celsius}° se torna ${calculo}°F`);
};