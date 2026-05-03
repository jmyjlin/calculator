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
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "*") {
    multiply(num1, num2);
  } else if (operator === "/") {
    divide(num1, num2);
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
oneButton.addEventListener('click', () => {
  if (display.textContent == '0') {
    display.textContent = '1';
  } else {
    display.textContent += '1';
  }
});
twoButton.addEventListener('click', () => {
  if (display.textContent == '0') {
    display.textContent = '2';
  } else {
    display.textContent += '2';
  }
});
threeButton.addEventListener('click', () => {
  if (display.textContent == '0') {
    display.textContent = '3';
  } else {
    display.textContent += '3';
  }
});
fourButton.addEventListener('click', () => {
  if (display.textContent == '0') {
    display.textContent = '4';
  } else {
    display.textContent += '4';
  }
});
fiveButton.addEventListener('click', () => {
  if (display.textContent == '0') {
    display.textContent = '5';
  } else {
    display.textContent += '5';
  }
});
sixButton.addEventListener('click', () => {
  if (display.textContent == '0') {
    display.textContent = '6';
  } else {
    display.textContent += '6';
  }
});
sevenButton.addEventListener('click', () => {
  if (display.textContent == '0') {
    display.textContent = '7';
  } else {
    display.textContent += '7';
  }
});
eightButton.addEventListener('click', () => {
  if (display.textContent == '0') {
    display.textContent = '8';
  } else {
    display.textContent += '8';
  }
});
nineButton.addEventListener('click', () => {
  if (display.textContent == '0') {
    display.textContent = '9';
  } else {
    display.textContent += '9';
  }
});
zeroButton.addEventListener('click', () => {
  if (display.textContent == '0') {
    display.textContent = '0';
  } else {
    display.textContent += '0';
  }
});
clearButton.addEventListener('click', () => {
  display.textContent = '0';
});
decimalButton.addEventListener('click', () => {
  const displayText = display.textContent;
  if (!displayText.includes('.')) {
    display.textContent += '.';
  }
});