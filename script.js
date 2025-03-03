let history =""
let currentInput = "0";

function updateDisplay() {
    document.getElementById("history").innerText = history;
    document.getElementById("result").innerText = currentInput;
}
function appendNumber(number) {
    if (currentInput === "0" && number !== ".") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}
function appendOperator(operator) {
    if (currentInput === "") return;
    history = currentInput + " " + operator;
    currentInput = "";
    updateDisplay();
}
function clearDisplay() {
    history = "";
    currentInput ="0";
    updateDisplay();
}
function backspace() {
    currentInput = currentInput.slice(0, -1) || "0";
    updateDisplay();
}
function percentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}
function calculateResult() {
    if (history && currentInput) {
        history += " " + currentInput;
        currentInput = eval(history).toString();
        history = "";
        updateDisplay();
    }
}

updateDisplay();