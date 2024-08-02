let display = document.getElementById('display');
let currentOperation = '';
let operation = '';

function appendNumber(number) {
    if (currentOperation.length < 18) {
        currentOperation += number;
        display.value = currentOperation;
    }
}

function setOperation(op) {
    if (currentOperation === '') return;
    if (operation !== '') {
        calculateResult();
    }
    operation = op;
    currentOperation += ' ' + operation + ' ';
    display.value = currentOperation;
}

function clearDisplay() {
    currentOperation = '';
    operation = '';
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(currentOperation);
        currentOperation = display.value;
        operation = '';
    } catch {
        display.value = 'Error';
        currentOperation = '';
        operation = '';
    }
}
