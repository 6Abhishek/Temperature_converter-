function convertTemp() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let convertedTemp;

    switch(fromUnit){
        case "celsius":
            if (toUnit === "fahrenheit") {
                convertedTemp = (inputTemp * 9/5) + 32;
              } 
            else if (toUnit === "kelvin") {
                convertedTemp = inputTemp + 273.15;
              }
            else if (toUnit === "celsius"){
                convertedTemp = inputTemp;
            }
            break;
        case "fahrenheit":
            if (toUnit === "celsius") {
                convertedTemp = (inputTemp - 32) * 5/9;
              } else if (toUnit === "kelvin") {
                convertedTemp = (inputTemp - 32) * 5/9 + 273.15;
              }
              else if (toUnit === "fahrenheit"){
                convertedTemp = inputTemp;
            }
            break;
        case "kelvin":
            if (toUnit === "celsius") {
                convertedTemp = inputTemp - 273.15;
              } 
              else if (toUnit === "fahrenheit") {
                convertedTemp = (inputTemp - 273.15) * 9/5 + 32;
              }
              else if (toUnit === "kelvin"){
                convertedTemp = inputTemp;
                }
            break;
    }
  
  
  
    const outputElement = document.getElementById("output");
    if (isNaN(convertedTemp)) {
      outputElement.textContent = "Invalid input. Please enter a number.";
    } 
    else {
      outputElement.innerHTML = `Converted temperature: <span style="color:red">${convertedTemp.toFixed(2)}</span> ${toUnit}`;
    }
  }
  