document.getElementById("convertButton").addEventListener("click", function() {
    let inputTemperature = document.getElementById("inputTemperature").value;
    let unit = document.getElementById("unit").value;
    let outputTemperature = document.getElementById("outputTemperature");
    
    // Validate if the input is a number
    if (isNaN(inputTemperature) || inputTemperature.trim() === "") {
        outputTemperature.textContent = "Please enter a valid number!";
        return;
    }

    // Convert the input to a floating-point number
    inputTemperature = parseFloat(inputTemperature);
    let convertedTemp = "";

    // Perform temperature conversions
    if (unit === "celsius") {
        let fahrenheit = (inputTemperature * 9/5) + 32;
        let kelvin = inputTemperature + 273.15;
        convertedTemp = ${fahrenheit.toFixed(2)} °F / ${kelvin.toFixed(2)} K;
    } else if (unit === "fahrenheit") {
        let celsius = (inputTemperature - 32) * 5/9;
        let kelvin = (inputTemperature - 32) * 5/9 + 273.15;
        convertedTemp = ${celsius.toFixed(2)} °C / ${kelvin.toFixed(2)} K;
    } else if (unit === "kelvin") {
        let celsius = inputTemperature - 273.15;
        let fahrenheit = (inputTemperature - 273.15) * 9/5 + 32;
        convertedTemp = ${celsius.toFixed(2)} °C / ${fahrenheit.toFixed(2)} °F;
    }

    // Display the result
    outputTemperature.textContent = convertedTemp;
});
