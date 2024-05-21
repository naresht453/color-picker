let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let selectedHexCodeElement = document.getElementById("selectedHexCode")

function changeBgToGrey() {
    colorPickerContainerElement.style.backgroundColor = "#e0e0e0";
    selectedHexCodeElement.textContent = "#e0e0e0";

}

function changeBgToGreen() {
    colorPickerContainerElement.style.backgroundColor = "#6fcf97";
    selectedHexCodeElement.textContent = "#6fcf97";

}
function changeBgToBlue() {
    colorPickerContainerElement.style.backgroundColor = "#56ccf2";
    selectedHexCodeElement.textContent = "#56ccf2";

}
function changeBgToPurple() {
    colorPickerContainerElement.style.backgroundColor = "#bb6bd9";
    selectedHexCodeElement.textContent = "#bb6bd9";

}