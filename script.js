const tempInput = document.getElementById("tempInput");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");
const swapBtn = document.getElementById("swapBtn");

// validate input
tempInput.addEventListener("input", () => {
    if (isNaN(tempInput.value) || tempInput.value.trim() === "") {
        error.textContent = "Please enter a valid number";
        convertBtn.disabled = true;
    } else {
        error.textContent = "";
        convertBtn.disabled = false;
    }
});

// prevent same unit conversion
function preventSameUnit() {
    if (fromUnit.value === toUnit.value) {
        result.textContent = "Choose different units to convert";
        return true;
    }
    return false;
}

// convert
convertBtn.addEventListener("click", () => {
    if (preventSameUnit()) return;

    let temp = parseFloat(tempInput.value);

    // convert to Kelvin base
    let k;
    if (fromUnit.value === "C") k = temp + 273.15;
    if (fromUnit.value === "F") k = (temp - 32) * (5 / 9) + 273.15;
    if (fromUnit.value === "K") k = temp;

    // convert from Kelvin
    let final;
    if (toUnit.value === "C") final = k - 273.15;
    if (toUnit.value === "F") final = (k - 273.15) * (9 / 5) + 32;
    if (toUnit.value === "K") final = k;

    result.textContent = `Converted Temp: ${final.toFixed(2)} °${toUnit.value}`;

});

swapBtn.addEventListener("click", () => {
    const temp = fromUnit.value;
    fromUnit.value = toUnit.value;
    toUnit.value = temp;
});