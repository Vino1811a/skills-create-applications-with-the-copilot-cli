#!/usr/bin/env node
// calculator.js - Node.js CLI Calculator
// Supports: addition (+), subtraction (-), multiplication (×), division (÷)

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

if (require.main === module) {
  const [,, operation, ...args] = process.argv;

  function printUsage() {
    console.log('Usage: node calculator.js <operation> <num1> <num2>');
    console.log('Operations: add (+), subtract (-), multiply (x), divide (/)');
    console.log('Example: node calculator.js add 2 3');
  }

  if (!operation || args.length !== 2) {
    printUsage();
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const num2 = parseFloat(args[1]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Both arguments must be valid numbers.');
    process.exit(1);
  }

  let result;
  try {
    switch (operation.toLowerCase()) {
      case 'add':
      case '+':
        result = add(num1, num2);
        break;
      case 'subtract':
      case '-':
        result = subtract(num1, num2);
        break;
      case 'multiply':
      case 'x':
      case '*':
        result = multiply(num1, num2);
        break;
      case 'divide':
      case '/':
        result = divide(num1, num2);
        break;
      default:
        console.error('Unsupported operation.');
        printUsage();
        process.exit(1);
    }
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide };