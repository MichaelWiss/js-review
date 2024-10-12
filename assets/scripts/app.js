const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult += enteredNumber;
    
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract () {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult -= enteredNumber;
    outputResult(currentResult, calcDescription);
}


function multiply () {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult *= enteredNumber;
    outputResult(currentResult, calcDescription);
}

function divide () {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult /= enteredNumber;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);