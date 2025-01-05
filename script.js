function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);
    // Avoid adding two operators in a row
    if (!isNaN(lastChar) || lastChar === ".") {
        display.value += operator;
    }
}

function clearDisplay() {
    document.getElementById('display').value = "0";
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
