function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "×") {
    return multiply(num1, num2);
  } else if (operator === "÷") {
    return divide(num1, num2);
  }
}
const display = document.querySelector('#display-txt');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const zeroButton = document.querySelector('#zero');
const clearButton = document.querySelector('#clear');
const decimalButton = document.querySelector('#decimal');
let num1 = 0;
let num2 = 0;
oneButton.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 1;
  } else {
    display.textContent += 1;
  }
});
twoButton.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 2;
  } else {
    display.textContent += 2;
  }
});
threeButton.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 3;
  } else {
    display.textContent += 3;
  }
});
fourButton.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 4;
  } else {
    display.textContent += 4;
  }
});
fiveButton.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 5;
  } else {
    display.textContent += 5;
  }
});
sixButton.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 6;
  } else {
    display.textContent += 6;
  }
});
sevenButton.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 7;
  } else {
    display.textContent += 7;
  }
});
eightButton.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 8;
  } else {
    display.textContent += 8;
  }
});
nineButton.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 9;
  } else {
    display.textContent += 9;
  }
});
zeroButton.addEventListener('click', () => {
  if (display.textContent == 0) {
    display.textContent = 0;
  } else {
    display.textContent += 0;
  }
});
clearButton.addEventListener('click', () => {
  display.textContent = 0;
});
decimalButton.addEventListener('click', () => {
  const displayText = display.textContent;
  if (!displayText.includes('.')) {
    display.textContent += '.';
  }
});

const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplicationButton = document.querySelector('#multiply');
const divisionButton = document.querySelector('#divide');

addButton.addEventListener('click', () => {
  const displayText = display.textContent;
  if (!displayText.includes('+') && !displayText.includes('-') && !displayText.includes('×') && !displayText.includes('÷')) {
    display.textContent += '+';
  }
});

subtractButton.addEventListener('click', () => {
  const displayText = display.textContent;
  if (!displayText.includes('+') && !displayText.includes('-') && !displayText.includes('×') && !displayText.includes('÷')) {
    display.textContent += '-';
  }
});

multiplicationButton.addEventListener('click', () => {
  const displayText = display.textContent;
  if (!displayText.includes('+') && !displayText.includes('-') && !displayText.includes('×') && !displayText.includes('÷')) {
    display.textContent += '×';
  }
});

divisionButton.addEventListener('click', () => {
  const displayText = display.textContent;
  if (!displayText.includes('+') && !displayText.includes('-') && !displayText.includes('×') && !displayText.includes('÷')) {
    display.textContent += '÷';
  }
});

const backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', () => {
  const displayText = display.textContent;
  const trimmedText = displayText.slice(0, -1);
  if (trimmedText.length > 0) {
    display.textContent = trimmedText;
  } else {
    display.textContent = 0;
  }
});

const equalButton = document.querySelector('#equal-btn');
equalButton.addEventListener('click', () => {
  const displayText = display.textContent;
  if (displayText.includes('+')) {
    num1 = +displayText.slice(0, displayText.indexOf('+'))
    num2 = +displayText.slice(displayText.indexOf('+') + 1)
    display.textContent = operate("+", num1, num2);
  } else if (displayText.includes('-')) {
    num1 = +displayText.slice(0, displayText.indexOf('-'))
    num2 = +displayText.slice(displayText.indexOf('-') + 1)
    display.textContent = operate("-", num1, num2);
  } else if (displayText.includes('×')) {
    num1 = +displayText.slice(0, displayText.indexOf('×'))
    num2 = +displayText.slice(displayText.indexOf('×') + 1)
    display.textContent = operate("×", num1, num2);
  } else if (displayText.includes('÷')) {
    num1 = +displayText.slice(0, displayText.indexOf('÷'))
    num2 = +displayText.slice(displayText.indexOf('÷') + 1)
    display.textContent = (num2 === 0 ? "Undefined" : operate("÷", num1, num2));
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === "1") {
    oneButton.click();
  } else if (event.key === "2") {
    twoButton.click();
  } else if (event.key === "3") {
    threeButton.click();
  } else if (event.key === "4") {
    fourButton.click();
  } else if (event.key === "5") {
    fiveButton.click();
  } else if (event.key === "6") {
    sixButton.click();
  } else if (event.key === "7") {
    sevenButton.click();
  } else if (event.key === "8") {
    eightButton.click();
  } else if (event.key === "9") {
    nineButton.click();
  } else if (event.key === "0") {
    zeroButton.click();
  } else if (event.key === "Backspace") {
    backspaceButton.click();
  } else if (event.key === "Enter") {
    equalButton.click();
  } else if (event.key === "+") {
    addButton.click();
  } else if (event.key === "-") {
    subtractButton.click();
  } else if (event.key === "*") {
    multiplicationButton.click();
  } else if (event.key === "/") {
    divisionButton.click();
  } else if (event.key === ".") {
    decimalButton.click();
  }
});