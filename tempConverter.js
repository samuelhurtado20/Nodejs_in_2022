function celsiusToFahrenheit(celsius)
{
    let fahrenheit = (celsius * 1.8) + 32;
    console.log(celsius + " Celsius is equal to " + fahrenheit + " Fahrenheit.")
}

function FahrenheitToCelsius(fahrenheit)
{
    let celsius = Math.floor((fahrenheit - 32) * 0.556);
    console.log(fahrenheit + " Fahrenheit is equal to " + celsius + " Celsius.")
}

celsiusToFahrenheit(50);

FahrenheitToCelsius(122);